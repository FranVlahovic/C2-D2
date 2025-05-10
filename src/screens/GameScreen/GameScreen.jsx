import Deck from "./Deck";
import ProfileBanner from "./ProfileBanner";

import Cog from "../../assets/icons/cog.svg";

import Scoreboard from "./Scoreboard";
import GameControls from "./GameControls";
import CardComponent from "./CardComponent";

import GameMenu from "./GameMenu/GameMenu";

export default function GameScreen({playerDeck, computerDeck, playerCard, computerCard, playerName, score, bestScore, handleGuess, cardShown, isMenuVisible, openMenu, closeMenu, handleTabSwitch, activeTab, handleScreenSwitch, resetScore, resetStart, activeOption, handleActiveOption, optionPreview, handleOptionPreview }){
    
    return (
        <div className="game-screen">
            <div className="game-header">
                <ProfileBanner name='Computer' deck={computerDeck} />
                <button className="settings-btn" onClick={openMenu} aria-label="Open Game Menu"><img src={Cog} alt="Settings Cog" /></button>
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
            {isMenuVisible && <GameMenu handleTabSwitch={handleTabSwitch} activeTab={activeTab} closeMenu={closeMenu} handleScreenSwitch={handleScreenSwitch} resetScore={resetScore} resetStart={resetStart} activeOption={activeOption} handleActiveOption={handleActiveOption} optionPreview={optionPreview} handleOptionPreview={handleOptionPreview} />}
        </div>
    )
}