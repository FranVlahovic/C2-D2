import Deck from "./components/Deck";
import Cog from "./assets/icons/cog.svg";
import Arrow from "./assets/icons/arrow-down.svg";

export default function GameScreen({playerDeck, computerDeck, playerCard, computerCard, playerName}){
    return (
        <div className="game-screen">
            <div className="game-header">
                <div className="profile-banner">
                    <h3>Computer</h3>
                    <img src={computerDeck.image} alt={computerDeck.imageAlt} />
                </div>
                <button className="settings-btn"><img src={Cog} alt="Settings Cog" /></button>
            </div>
            <div className="game-main">
                <div className="scoreboard-best">
                    <h2>Best Score</h2>
                    <span>4</span>
                </div>
                <div className="computer-side">
                    <Deck data={computerDeck} />
                    <div className="computer-card">
                        <h2>{computerCard.name}</h2>
                        <p>{computerCard.value}</p>
                    </div>
                </div>
                <div className="game-controls">
                    <button className="lower-btn"><img src={Arrow} alt="Arrow down" /></button>
                    <button className="higher-btn"><img src={Arrow} alt="Arrow up" /></button>
                </div>
                <div className="player-side">
                    <Deck data={playerDeck} />
                    <div className="player-card">
                        <h2>{playerCard.name}</h2>
                        <p>{playerCard.value}</p>
                    </div>
                </div>
            </div>
            <div className="scoreboard-score">
                <span>4</span>
                <h2>Score</h2>
            </div>
            <div className="game-footer">
                <div className="profile-banner">
                    <h3>{playerName}</h3>
                    <img src={playerDeck.image} alt={playerDeck.imageAlt} />
                </div>
            </div>               
        </div>
    )
}