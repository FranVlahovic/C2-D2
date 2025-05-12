import GameOverFooter from "./GameOverFooter";
import GameOverHeader from "./GameOverHeader";
import GameOverStatsCard from "./GameOverStatsCard";

export default function GameOverScreen({ score, bestScore, accPercentage, avgScore, gamesPlayed, playerName, updateDate, playerDeck }){
    const stats = [
        { title: 'correct', value: score },
        { title: 'wrong', value: bestScore },
        { title: 'accuracy', value: accPercentage },
        
        { title: 'best score', value: bestScore },
        { title: 'avg score', value: avgScore },
        { title: 'total games', value: gamesPlayed },
    ]
    return (
        <div className="game-over-screen">
            <GameOverHeader name={playerName} date={updateDate} faction={playerDeck} />

            <div className="stats-cards-container">
                {stats.map((card) => (
                    <GameOverStatsCard key={card.title} title={card.title} value={card.value} />
                ))}
            </div>

            <GameOverFooter />

        </div>
    );
}