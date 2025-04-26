import { useState } from "react";
import StartScreen from "./StartScreen.jsx";


export default function App() {
  const [currentScreen, setCurrentScreen] = useState('start'); 
  
  function handleStart(){
    setCurrentScreen('disclaimer');
  }


  return (
    <>
      {currentScreen === 'start' && <StartScreen handleStart={handleStart} />}
      {currentScreen === 'disclaimer' && <Disclaimer />}
    </>
  );
}
