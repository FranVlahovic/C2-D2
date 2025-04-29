import { useState } from 'react';
import StartScreen from './StartScreen.jsx';
import DisclaimerScreen from './Disclaimer.jsx';
import FactionScreen from './FactionScreen.jsx';
import IntroductionScreen from './Introduction.jsx';

export default function App() {
    const [currentScreen, setCurrentScreen] = useState('start');
    const [playerDeck, setPlayerDeck] = useState();
    const [factionText, setFactionText] = useState('Choose your Faction');
    const [isLoading, setIsLoading] = useState(false);
    const [playerName, setPlayerName] = useState();

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
            {currentScreen === 'introduction' && <IntroductionScreen setPlayerName={setPlayerName} playerName={playerName} isLoading={isLoading} handleLoading={handleLoading} setCurrentScreen={setCurrentScreen} />}
            {currentScreen === 'faction' && <FactionScreen handleScreenSwitch={handleScreenSwitch} handleChosenDeck={handleChosenDeck} factionText={factionText} handleFactionText={handleFactionText} handleLoading={handleLoading} isLoading={isLoading}/>}
            {currentScreen === 'game' && <GameScreen handleScreenSwitch={handleScreenSwitch} playerDeck={playerDeck} />}
        </>
    );
}
