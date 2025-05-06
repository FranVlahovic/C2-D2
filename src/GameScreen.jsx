import Deck from "./components/Deck";
import ProfileBanner from "./components/ProfileBanner";

import Cog from "./assets/icons/cog.svg";

import Scoreboard from "./components/Scoreboard";
import GameControls from "./components/GameControls";
import CardComponent from "./components/CardComponent";

import GameMenu from "./components/GameMenu/GameMenu";

export default function GameScreen({playerDeck, computerDeck, playerCard, computerCard, playerName, score, bestScore, handleGuess, cardShown, isMenuVisible, toggleMenu}){
    
    return (
        <div className="game-screen">
            <div className="game-header">
                <ProfileBanner name='Computer' deck={computerDeck} />
                <button className="settings-btn" onClick={toggleMenu}><img src={Cog} alt="Settings Cog" /></button>
            </div>
            <div className="game-main">
                <Scoreboard className={'scoreboard-best'} text='Best Score' value={bestScore} isScore={false} />
                <div className="computer-side">
                    <Deck data={computerDeck} />
                    
                    {cardShown ?
                        <CardComponent id={computerCard.id} first={computerCard.first} last={computerCard.last} image={computerCard.image} imageAlt={computerCard.imageAlt} factionImage={computerCard.factionImage} factionImageAlt={computerCard.factionImageAlt} power={computerCard.power} /> :
                        <div className="hidden-card">
                            <div className="cardback-border">
                                <img src={computerDeck.image} alt={computerDeck.imageAlt} />
                            </div>
                        </div>
                    }
                </div>
                <GameControls handleClick={handleGuess} />
                <div className="player-side">
                    <Deck data={playerDeck} />
                    <CardComponent id={playerCard.id} first={playerCard.first} last={playerCard.last} image={playerCard.image} imageAlt={playerCard.imageAlt} factionImage={playerCard.factionImage} factionImageAlt={playerCard.factionImageAlt} power={playerCard.power} />
                </div>
            </div>
            <Scoreboard className='scoreboard-score' text='Score' value={score} isScore={true} />
            <div className="game-footer">
                <ProfileBanner name={playerName} deck={playerDeck} />
            </div>
            {isMenuVisible && <GameMenu />}
        </div>
    )
}