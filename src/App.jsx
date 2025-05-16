import { useEffect, useState } from 'react';
import useSound from 'use-sound';

import { factions } from './data/factions.js';
import { cards } from './data/cardData.js';

import StartScreen from './screens/StartScreen/StartScreen.jsx';
import DisclaimerScreen from './screens/DisclaimerScreen/Disclaimer.jsx';
import FactionScreen from './screens/FactionScreen/FactionScreen.jsx';
import IntroductionScreen from './screens/IntroductionScreen/Introduction.jsx';
import GameScreen from './screens/GameScreen/GameScreen.jsx';

import ClickSound from './assets/sounds/click-sound.mp3';
import CardSound from './assets/sounds/cards-sound.mp3';
import BackgroundMusic from './assets/sounds/website-music.mp3';
import GameOverScreen from './screens/GameOverScreen/GameOverScreen.jsx';

export default function App() {
    const [playClick] = useSound(ClickSound, { volume: 0.15 });
    const [playCard] = useSound(CardSound, { volume: 0.15 });
    const [playBackground, { stop }] = useSound(BackgroundMusic, { volume: 0.03, loop: true, playbackRate: 0.7 });

    const [soundEnabled, setSoundEnabled] = useState(false);
    const [musicEnabled, setMusicEnabled] = useState(false);
    
    const [currentScreen, setCurrentScreen] = useState('start');
    const [isLoading, setIsLoading] = useState(false);

    const [playerName, setPlayerName] = useState(() => {
        return localStorage.getItem('playerName') || '';
          
    });
    const [nameError, setNameError] = useState('');

    const [fullCards, setFullCards] = useState([]);
    const [playerDeck, setPlayerDeck] = useState();
    const [computerDeck, setComputerDeck] = useState();
    const [playerCard, setPlayerCard] = useState();
    const [computerCard, setComputerCard] = useState();
    
    const [score, setScore] = useState(0);
    
    const [correctGuesses, setCorrectGuesses] = useState(() => {
        const storedCorrect = localStorage.getItem('correctGuesses');
        return storedCorrect ? parseInt(storedCorrect) : 0;
    });
    const [wrongGuesses, setWrongGuesses] = useState(() => {
        const storedWrong = localStorage.getItem('wrongGuesses');
        return storedWrong ? parseInt(storedWrong) : 0;
    })
    const [bestScore, setBestScore] = useState(() => {
        const stored = localStorage.getItem('bestScore');
        return stored ? parseInt(stored) : 0;
    });
    
    const [cardShown, setCardShown] = useState(false);

    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('paused');
    const [activeOption, setActiveOption] = useState('');
    const [optionPreview, setOptionPreview] = useState('');

    function handleToggleSound(){
        setSoundEnabled(prev=> !prev);
    }

    function handleToggleMusic(){
        setMusicEnabled(prev=> !prev);
    }

    function handleScreenSwitch(screen) {
        setCurrentScreen(screen);
    }

    function handleChosenDeck(deck){
        setPlayerDeck(deck);
        soundEnabled && playClick();
    }

    function handleLoading(value){
        setIsLoading(value)
    }

    function randomItem(items){
        return items[Math.floor(Math.random() * items.length)];
    }

    function handleGuess(guess){
        soundEnabled && playCard();
        setCardShown(true);
    
        const correctGuess = 
        (guess === 'higher' && playerCard.power > computerCard.power) || 
        (guess === 'lower' && playerCard.power < computerCard.power) 
        
        if(correctGuess){
            const newScore = score + 1;
            setScore(newScore);
            setCorrectGuesses(prev => prev + 1);
            
            if(newScore > bestScore){
                setBestScore(newScore);
            }
            
        }
        setTimeout(() => {
            if(correctGuess){
                setComputerCard(randomItem(fullCards));
                setPlayerCard(randomItem(fullCards));
            } else{
                setWrongGuesses(prev => prev + 1);
                resetScore();
                handleScreenSwitch('game-over');
            }
            setCardShown(false);
        }, 1500);
    }

    const totalGames = correctGuesses + wrongGuesses;
    
    function accPercentage(){
        if (totalGames === 0){
            return '0%'
        };
        return `${Math.round((correctGuesses / totalGames) * 100)}%`;
    }

    function avgScore(){
        if(totalGames === 0){
            return 0;
        };
        return Math.round(correctGuesses / totalGames);
    }
    
    function resetScore(){
        setScore(0);   
    }

    function resetStats(){
        closeMenu();
        resetScore();
        setBestScore(0);
        setCorrectGuesses(0);
        setWrongGuesses(0);
        playerName('');
    }

    function resetStart(){
        setCurrentScreen('start');
        resetScore();
        setPlayerDeck();
        setIsMenuVisible(false);
        setActiveTab('paused');
        setActiveOption('');
        setOptionPreview('');
    }

    function playAgain(){
        resetScore();
        setIsMenuVisible(false);
        setActiveTab('paused');
        setActiveOption('');
        setOptionPreview('');
        handleScreenSwitch('game');
    }

    function handleRestart(){
        closeMenu();
        resetScore();
    }

    function openMenu(){
        soundEnabled && playClick();
        setIsMenuVisible(true);
        setActiveTab('paused');
    }

    function closeMenu(){
        soundEnabled && playClick();
        setIsMenuVisible(false);
        setActiveOption('');
        setOptionPreview('');
    }

    function handleTabSwitch(tab) {
        soundEnabled && playClick();
        setActiveTab(tab);
        setActiveOption('');
        setOptionPreview('');
    }

    function handleActiveOption(option){
        soundEnabled && playClick();
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
            soundEnabled && playCard();
            musicEnabled ? playBackground() : stop();
            
            setComputerDeck(randomItem(factions));
            setComputerCard(randomItem(fullCards));
            setPlayerCard(randomItem(fullCards));
        }
    }, [currentScreen, fullCards, playBackground, playCard, soundEnabled, musicEnabled, stop]);

    // AVOIDING DUPLICATES
    useEffect(() => {
        if (playerCard && computerCard && playerCard.name === computerCard.name){
            setPlayerCard(randomItem(fullCards))
        }
    }, [playerCard, computerCard, fullCards, playCard])

    // GET BEST SCORE FROM LOCAL STORAGE
    useEffect(() => {
        localStorage.setItem('bestScore', bestScore);
    }, [bestScore]);
    // GET CORRECT GUESSES FROM LOCAL STORAGE
    useEffect(() => {
        localStorage.setItem('correctGuesses', correctGuesses);
    }, [correctGuesses]);
    // GET WRONG GUESSES FROM LOCAL STORAGE
    useEffect(() => {
        localStorage.setItem('wrongGuesses', wrongGuesses);
    }, [wrongGuesses]);
    // GET PLAYER NAME FROM LOCAL STORAGE
    useEffect(() => {
        localStorage.setItem('playerName', playerName);
    }, [playerName]);

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
            {currentScreen === 'disclaimer' && <DisclaimerScreen handleScreenSwitch={handleScreenSwitch} playerName={playerName} />}
            {currentScreen === 'introduction' && <IntroductionScreen setPlayerName={setPlayerName} playerName={playerName} isLoading={isLoading} handleLoading={handleLoading} setCurrentScreen={setCurrentScreen} nameError={nameError} setNameError={setNameError} />}
            {currentScreen === 'faction' && <FactionScreen handleScreenSwitch={handleScreenSwitch} handleChosenDeck={handleChosenDeck} handleLoading={handleLoading} isLoading={isLoading} />}
            {currentScreen === 'game' && playerDeck && computerDeck && 
            <GameScreen 
                handleScreenSwitch={handleScreenSwitch} 
                playerDeck={playerDeck} 
                computerDeck={computerDeck} 
                playerCard={playerCard} 
                computerCard={computerCard} 
                playerName={playerName} 
                nameError={nameError} 
                setNameError={setNameError} 
                score={score} 
                bestScore={bestScore} 
                handleGuess={handleGuess} 
                cardShown={cardShown} 
                isMenuVisible={isMenuVisible} 
                openMenu={openMenu} 
                closeMenu={closeMenu} 
                handleTabSwitch={handleTabSwitch} 
                activeTab={activeTab} 
                resetScore={resetScore} 
                resetStart={resetStart} 
                activeOption={activeOption} 
                handleActiveOption={handleActiveOption} 
                optionPreview={optionPreview} 
                handleOptionPreview={handleOptionPreview} 
                setPlayerName={setPlayerName} 
                handleChosenDeck={handleChosenDeck} 
                handleToggleSound={handleToggleSound} 
                soundEnabled={soundEnabled} 
                musicEnabled={musicEnabled} 
                handleToggleMusic={handleToggleMusic} 
                handleRestart={handleRestart}
                resetStats={resetStats}
                totalGames={totalGames} 
                accPercentage={accPercentage} 
                correctGuesses={correctGuesses} 
                wrongGuesses={wrongGuesses} 
                avgScore={avgScore}
            />}

            {currentScreen === 'game-over' && 
            <GameOverScreen
                playerName={playerName} 
                playerDeck={playerDeck} 
                resetStart={resetStart}
                totalGames={totalGames} 
                accPercentage={accPercentage} 
                correctGuesses={correctGuesses} 
                wrongGuesses={wrongGuesses}
                bestScore={bestScore}
                avgScore={avgScore}
                playAgain={playAgain}
            />}
            
        </>
    );
}

