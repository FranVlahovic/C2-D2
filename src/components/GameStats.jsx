export default function GameOverStatsCard({ totalGames, accPercentage, correctGuesses, wrongGuesses, bestScore, avgScore }){

    const stats = [
        { title: 'correct', value: correctGuesses },
        { title: 'wrong', value: wrongGuesses },
        { title: 'accuracy', value: accPercentage() },
        
        { title: 'best score', value: bestScore },
        { title: 'avg score', value: avgScore() },
        { title: 'total games', value: totalGames },
    ]

    return (
        <div className="stats-cards-container">
            {stats.map((card) => (
                <div className="stats-card" key={card.title}>
                    <div className="stats-card-circle">
                        <h3>{card.title.toUpperCase()}</h3>
                        <span>{card.value}</span>
                        <div className="stats-card-dif">
                            <h3>DIFF</h3>
                            <span>2</span>
                        </div>
                    </div>
                </div>  
            ))}
        </div>
    );
}