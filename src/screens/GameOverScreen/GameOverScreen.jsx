import GameOverFooter from "./GameOverFooter";
import GameOverHeader from "./GameOverHeader";
import GameStats from "../../components/GameStats";

export default function GameOverScreen({ 
    playerName, 
    playerDeck,
    resetStart,
    totalGames, 
    accPercentage, 
    correctGuesses, 
    wrongGuesses, 
    bestScore, 
    avgScore,
    playAgain
}){

    return (
        <div className="game-over-screen">
            <div className="game-over-pre-header">
                <h2>END OF MATCH</h2>
            </div>

            <GameOverHeader name={playerName}  faction={playerDeck} correctGuesses={correctGuesses} />
            
            <GameStats 
                totalGames={totalGames} 
                accPercentage={accPercentage} 
                correctGuesses={correctGuesses} 
                wrongGuesses={wrongGuesses}
                bestScore={bestScore}
                avgScore={avgScore}
            /> 

            <GameOverFooter playAction={playAgain} menuAction={resetStart}/>

        </div>
    );
}