import { useState } from 'react';
import StartScreen from './StartScreen.jsx';
import DisclaimerScreen from './Disclaimer.jsx';
import FactionScreen from './FactionScreen.jsx';

export default function App() {
    const [currentScreen, setCurrentScreen] = useState('start');
    const [playerDeck, setPlayerDeck] = useState();
    const [factionText, setFactionText] = useState('Choose your Faction');
    const [isLoading, setIsLoading] = useState(false);

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

    return (
        <>
            {currentScreen === 'start' && <StartScreen handleScreenSwitch={handleScreenSwitch} />}
            {currentScreen === 'disclaimer' && <DisclaimerScreen handleScreenSwitch={handleScreenSwitch} />}
            {currentScreen === 'faction' && <FactionScreen handleScreenSwitch={handleScreenSwitch} handleChosenDeck={handleChosenDeck} factionText={factionText} handleFactionText={handleFactionText} handleLoading={handleLoading} isLoading={isLoading}/>}
            {currentScreen === 'game' && <GameScreen handleScreenSwitch={handleScreenSwitch} playerDeck={playerDeck} />}
        </>
    );
}
