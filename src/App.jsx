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
    
    const [playerDeck, setPlayerDeck] = useState();
    const [computerDeck, setComputerDeck] = useState();
    
    const [playerCard, setPlayerCard] = useState();
    const [computerCard, setComputerCard] = useState();
    
    const [factionText, setFactionText] = useState('Choose your Faction');
    const [isLoading, setIsLoading] = useState(false);
    const [playerName, setPlayerName] = useState('');

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

    useEffect(() => {
        if(currentScreen === 'game') {
            setComputerDeck(randomItem(factions));
            setComputerCard(randomItem(cards));
            setPlayerCard(randomItem(cards));
        }
    }, [currentScreen]);

    useEffect(() => {
        if (playerCard === computerCard){
            setPlayerCard(randomItem(cards))
        }
    }, [playerCard, computerCard])

    return (
        <>
            {currentScreen === 'start' && <StartScreen handleScreenSwitch={handleScreenSwitch} />}
            {currentScreen === 'disclaimer' && <DisclaimerScreen handleScreenSwitch={handleScreenSwitch} />}
            {currentScreen === 'introduction' && <IntroductionScreen setPlayerName={setPlayerName} playerName={playerName} isLoading={isLoading} handleLoading={handleLoading} setCurrentScreen={setCurrentScreen} />}
            {currentScreen === 'faction' && <FactionScreen handleScreenSwitch={handleScreenSwitch} handleChosenDeck={handleChosenDeck} factionText={factionText} handleFactionText={handleFactionText} handleLoading={handleLoading} isLoading={isLoading}/>}
            {currentScreen === 'game' && playerDeck && computerDeck && <GameScreen handleScreenSwitch={handleScreenSwitch} playerDeck={playerDeck} computerDeck={computerDeck} playerCard={playerCard} computerCard={computerCard} />}
        </>
    );
}
