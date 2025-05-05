import { useEffect, useState } from 'react';

import { factions } from './data/factions.js';
import { cards } from './data/cardData.js';

import StartScreen from './StartScreen.jsx';
import DisclaimerScreen from './Disclaimer.jsx';
import FactionScreen from './FactionScreen.jsx';
import IntroductionScreen from './Introduction.jsx';
import GameScreen from './GameScreen.jsx';

export default function App() {
    const [currentScreen, setCurrentScreen] = useState('start');
    const [isLoading, setIsLoading] = useState(false);
    
    const [playerName, setPlayerName] = useState('');
    const [nameError, setNameError] = useState('');
    
    const [fullCards, setFullCards] = useState([]);
    const [playerDeck, setPlayerDeck] = useState();
    const [computerDeck, setComputerDeck] = useState();
    const [playerCard, setPlayerCard] = useState();
    const [computerCard, setComputerCard] = useState();
    
    const [factionText, setFactionText] = useState('Choose your Faction');

    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(() => {
        const stored = localStorage.getItem('bestScore');
        return stored ? parseInt(stored) : 0;
    });
    const [cardShown, setCardShown] = useState(false);

    function handleScreenSwitch(screen) {
        setCurrentScreen(screen);
    }

    function handleChosenDeck(deck){
        setPlayerDeck(deck)
    }

    function handleFactionText(text){
        setFactionText(text)
    }

    function handleLoading(value){
        setIsLoading(value)
    }

    function randomItem(items){
        return items[Math.floor(Math.random() * items.length)];
    }

    function handleGuess(guess){
        setCardShown(true);
    
        const correctGuess = 
        (guess === 'higher' && playerCard.power > computerCard.power) || 
        (guess === 'lower' && playerCard.power < computerCard.power) 
        
        if(correctGuess){
            const newScore = score + 1;
            setScore(newScore);

            if(newScore > bestScore){
                setBestScore(newScore);
            }

            setTimeout(() => {
                setComputerCard(randomItem(fullCards));
                setPlayerCard(randomItem(fullCards));
                setCardShown(false);
            }, 1500);

        } else {
            setTimeout(() => {
                setScore(0);
                setCardShown(false);
            }, 1500)
            // setCurrentScreen('game-over');
        }
    }

    // FETCH CARD IMAGES
    useEffect(() => {
        let isMounted = true;

        async function fetchData() {
            const response = await fetch("https://akabab.github.io/starwars-api/api/all.json");
            const data = await response.json();

            if(isMounted){
                const updatedCards = cards.map(card => {
                    const match = data.find(char => char.name === card.name);
                    return {
                        ...card,
                        image: match ? match.image : null
                    };
                });
                setFullCards(updatedCards);
            }
        }
        fetchData();

        return () => {
            isMounted = false;
        }
    }, []);

    // RANDOMIZE CARDS & ENEMY DECK ON GAME PAGE LOAD
    useEffect(() => {
        if(currentScreen === 'game' && fullCards.length > 0) {
            setComputerDeck(randomItem(factions));
            setComputerCard(randomItem(fullCards));
            setPlayerCard(randomItem(fullCards));
        }
    }, [currentScreen, fullCards]);

    // AVOIDING DUPLICATES
    useEffect(() => {
        if (playerCard && computerCard && playerCard.name === computerCard.name){
            setPlayerCard(randomItem(fullCards))
        }
    }, [playerCard, computerCard, fullCards])

    // GET SCORE FROM LOCAL STORAGE
    useEffect(() => {
        localStorage.setItem('bestScore', bestScore);
    }, [bestScore]);


    return (
        <>
            {currentScreen === 'start' && <StartScreen handleScreenSwitch={handleScreenSwitch} />}
            {currentScreen === 'disclaimer' && <DisclaimerScreen handleScreenSwitch={handleScreenSwitch} />}
            {currentScreen === 'introduction' && <IntroductionScreen setPlayerName={setPlayerName} playerName={playerName} isLoading={isLoading} handleLoading={handleLoading} setCurrentScreen={setCurrentScreen} nameError={nameError} setNameError={setNameError} />}
            {currentScreen === 'faction' && <FactionScreen handleScreenSwitch={handleScreenSwitch} handleChosenDeck={handleChosenDeck} factionText={factionText} handleFactionText={handleFactionText} handleLoading={handleLoading} isLoading={isLoading}/>}
            {currentScreen === 'game' && playerDeck && computerDeck && <GameScreen handleScreenSwitch={handleScreenSwitch} playerDeck={playerDeck} computerDeck={computerDeck} playerCard={playerCard} computerCard={computerCard} playerName={playerName} nameError={nameError} setNameError={setNameError} score={score} bestScore={bestScore} handleGuess={handleGuess} cardShown={cardShown} />}
        </>
    );
}
