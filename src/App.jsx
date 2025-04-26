import { useState } from 'react';
import StartScreen from './StartScreen.jsx';
import DisclaimerScreen from './Disclaimer.jsx';
import FactionScreen from './FactionScreen.jsx';

export default function App() {
    const [currentScreen, setCurrentScreen] = useState('start');
    const [playerDeck, setPlayerDeck] = useState();

    function handleScreenSwitch(screen) {
        setCurrentScreen(screen);
    }

    function handleChosenDeck(deck){
        setPlayerDeck(deck)
    }

    return (
        <>
            {currentScreen === 'start' && <StartScreen handleScreenSwitch={handleScreenSwitch} />}
            {currentScreen === 'disclaimer' && <DisclaimerScreen handleScreenSwitch={handleScreenSwitch} />}
            {currentScreen === 'faction' && <FactionScreen handleScreenSwitch={handleScreenSwitch} handleChosenDeck={handleChosenDeck} />}
            {currentScreen === 'game' && <GameScreen handleScreenSwitch={handleScreenSwitch} playerDeck={playerDeck} />}
        </>
    );
}
