import { achievementRules } from '../data/achievements';

import CorrectAchievementImage from '../assets/icons/correct-ach.svg';
import WrongAchievementImage from '../assets/icons/wrong-ach.svg';
import BestAchievementImage from '../assets/icons/best-ach.svg';
import GamesAchievementImage from '../assets/icons/games-ach.svg';

export default function GameOverStatsCard({ totalGames, accPercentage, correctGuesses, wrongGuesses, bestScore, avgScore }){
    const stats = [
        { title: 'correct', value: correctGuesses },
        { title: 'wrong', value: wrongGuesses },
        { title: 'accuracy', value: accPercentage() },
        
        { title: 'best score', value: bestScore },
        { title: 'avg score', value: avgScore() },
        { title: 'total games', value: totalGames },
    ]
    

    const achievements = []

    function getAchievementIcon(type){
        const icons = {
            correct: CorrectAchievementImage,
            wrong: WrongAchievementImage,
            best: BestAchievementImage,
            games: GamesAchievementImage,
        };
        return icons[type];
    }

    achievementRules.forEach(({ title, type, rank, description, correctNumber, wrongNumber, bestNumber, gamesNumber }) => {
        if (
            (correctNumber && correctGuesses >= correctNumber) ||
          (wrongNumber && wrongGuesses >= wrongNumber) || 
          (bestNumber && bestScore >= bestNumber) ||
          (gamesNumber && totalGames >= gamesNumber)
        ) {
            achievements.push({
                title,
                description,
                type,
                rank,
                image: getAchievementIcon(type),
            });
        }
    });

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
                            <img src={ach.image} alt={`${ach.type} achievement icon`} className={`achievement-icon ${ach.rank}`} />
                            <div className="achievement-card-info">
                                <h3>{ach.title}</h3>
                                <p>{ach.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}