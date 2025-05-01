import Deck from "./components/Deck";

export default function GameScreen({playerDeck, computerDeck, playerCard, computerCard}){
    return (
        <div className="game-screen">
            <div className="game-header">
                <div className="profile-banner">
                    <h3>Player Name</h3>
                    <p>image</p>
                </div>
                <div className="scoreboard-best">
                    <h2>test</h2>
                </div>
                <button>COG</button>
            </div>
            <div className="game-main">
                <div className="computer-side">
                    <Deck data={computerDeck} />
                    <div className="computer-card">
                        <h2>{computerCard.name}</h2>
                        <p>{computerCard.value}</p>
                    </div>
                </div>
                <div className="game-controls">
                    <button>UP</button>
                    <button>UP</button>
                </div>
                <div className="player-side">
                    <Deck data={playerDeck} />
                    <div className="player-card">
                        <h2>{playerCard.name}</h2>
                        <p>{playerCard.value}</p>
                    </div>
                </div>
            </div>
            <div className="game-footer">
                <div className="profile-banner">
                    <h3>Player Name</h3>
                    <p>image</p>
                </div>
                <div className="scoreboard-score">
                    <h2>test</h2>
                </div>
            </div>               
        </div>
    )
}