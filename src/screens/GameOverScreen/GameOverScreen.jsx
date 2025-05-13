import GameOverFooter from "./GameOverFooter";
import GameOverHeader from "./GameOverHeader";
import GameStats from "../../components/GameStats";

export default function GameOverScreen({ 
    playerName, 
    playerDeck,
    handleRestart,
    resetStart,
    totalGames, 
    accPercentage, 
    correctGuesses, 
    wrongGuesses, 
    bestScore, 
    avgScore
}){
    // const updateDate = new Date;

    return (
        <div className="game-over-screen">
            <GameOverHeader name={playerName}  faction={playerDeck} />
            
            <GameStats 
                totalGames={totalGames} 
                accPercentage={accPercentage} 
                correctGuesses={correctGuesses} 
                wrongGuesses={wrongGuesses}
                bestScore={bestScore}
                avgScore={avgScore}
            /> 

            <GameOverFooter playAction={handleRestart} menuAction={resetStart}/>

        </div>
    );
}