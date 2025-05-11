import { useEffect, useState } from 'react';

import { factions } from './data/factions.js';
import { cards } from './data/cardData.js';

import StartScreen from './screens/StartScreen/StartScreen.jsx';
import DisclaimerScreen from './screens/DisclaimerScreen/Disclaimer.jsx';
import FactionScreen from './screens/FactionScreen/FactionScreen.jsx';
import IntroductionScreen from './screens/IntroductionScreen/Introduction.jsx';
import GameScreen from './screens/GameScreen/GameScreen.jsx';

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

    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(() => {
        const stored = localStorage.getItem('bestScore');
        return stored ? parseInt(stored) : 0;
    });
    const [cardShown, setCardShown] = useState(false);

    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('paused');
    const [activeOption, setActiveOption] = useState('');
    const [optionPreview, setOptionPreview] = useState('');

    function handleScreenSwitch(screen) {
        setCurrentScreen(screen);
    }

    function handleChosenDeck(deck){
        setPlayerDeck(deck)
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

        }
        setTimeout(() => {
            if(correctGuess){
                setComputerCard(randomItem(fullCards));
                setPlayerCard(randomItem(fullCards));
            } else{
                resetScore();
                handleScreenSwitch('game-over');
            }
            setCardShown(false);
        }, 1500);
    }

    function resetScore(){
        setScore(0);   
    }

    function resetStart(){
        setCurrentScreen('start');
        setPlayerName('');
        setScore(0);
        setPlayerDeck();
        setIsMenuVisible(false);
        setActiveTab('paused');
        setActiveOption('');
        setOptionPreview('');
    }

    function openMenu(){
        setIsMenuVisible(true);
        setActiveTab('paused');
    }

    function closeMenu(){
        setIsMenuVisible(false);
        setActiveOption('');
        setOptionPreview('');
    }

    function handleTabSwitch(tab) {
        setActiveTab(tab);
        setActiveOption('');
        setOptionPreview('');
    }

    function handleActiveOption(option){
        setActiveOption(option);
    }

    function handleOptionPreview(option){
        setOptionPreview(option);
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

    //ESCAPE KEY LOGIC
    useEffect(() => {
        function handleKeyDown(e){
            if(e.key === 'Escape'){
                closeMenu();
            }
        }
        if(isMenuVisible){
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [isMenuVisible]);


    return (
        <>
            {currentScreen === 'start' && <StartScreen handleScreenSwitch={handleScreenSwitch} />}
            {currentScreen === 'disclaimer' && <DisclaimerScreen handleScreenSwitch={handleScreenSwitch} bestScore={bestScore} />}
            {currentScreen === 'introduction' && <IntroductionScreen setPlayerName={setPlayerName} playerName={playerName} isLoading={isLoading} handleLoading={handleLoading} setCurrentScreen={setCurrentScreen} nameError={nameError} setNameError={setNameError} />}
            {currentScreen === 'faction' && <FactionScreen handleScreenSwitch={handleScreenSwitch} handleChosenDeck={handleChosenDeck} handleLoading={handleLoading} isLoading={isLoading} />}
            {currentScreen === 'game' && playerDeck && computerDeck && <GameScreen handleScreenSwitch={handleScreenSwitch} playerDeck={playerDeck} computerDeck={computerDeck} playerCard={playerCard} computerCard={computerCard} playerName={playerName} nameError={nameError} setNameError={setNameError} score={score} bestScore={bestScore} handleGuess={handleGuess} cardShown={cardShown} isMenuVisible={isMenuVisible} openMenu={openMenu} closeMenu={closeMenu} handleTabSwitch={handleTabSwitch} activeTab={activeTab} resetScore={resetScore} resetStart={resetStart} activeOption={activeOption} handleActiveOption={handleActiveOption} optionPreview={optionPreview} handleOptionPreview={handleOptionPreview} setPlayerName={setPlayerName} handleChosenDeck={handleChosenDeck} />}
        </>
    );
}
