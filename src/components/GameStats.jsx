export default function GameOverStatsCard({ totalGames, accPercentage, correctGuesses, wrongGuesses, bestScore, avgScore }){

    const stats = [
        { title: 'correct', value: correctGuesses },
        { title: 'wrong', value: wrongGuesses },
        { title: 'accuracy', value: accPercentage() },
        
        { title: 'best score', value: bestScore },
        { title: 'avg score', value: avgScore() },
        { title: 'total games', value: totalGames },
    ]
    
    const achievements = [
        { title: 'Welcome Abroad!', description: 'Started playing C2-D2' },
    ]

    const achievementRules = [
        {
            title: 'Baby Droid',
            condition: correctGuesses >= 10,
        },
        {
            title: 'Rising Droid',
            condition: correctGuesses >= 30,
        },
        {
            title: 'Oops Master',
            condition: wrongGuesses >= 10,
        },
        {
            title: 'Veteran Player',
            condition: totalGames >= 20,
        },
        {
            title: 'High Scorer',
            condition: bestScore >= 50,
        },
    ];
      
    achievementRules.forEach((ach)=>
    {
        if(ach.condition){
            achievements.push({ title: ach.title })
        }
    })

    return (
        <div className="game-stats-screen">
        
            <div className="game-stats-container">
                <div className="stats-cards-title">
                    <h3>GAME STATS</h3>
                </div>
                <div className="stats-cards-container">
                    {stats.map((card) => (
                        <div className="stats-card" key={card.title}>
                            <div className="stats-card-header">
                                <h3>{card.title.toUpperCase()}</h3>
                            </div>
                            <span>{card.value}</span>
                        </div>  
                    ))}
                </div>
            </div>
            <div className="game-achievements-container">
                <div className="stats-cards-title">
                    <h3>ACHIEVEMENTS</h3>
                </div>
                <div className="achievements-container">
                    {achievements.map((ach) => (
                        <div className="achievement-card" key={ach.index}>
                            <h3>{ach.title}</h3>
                            <p>{ach.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}