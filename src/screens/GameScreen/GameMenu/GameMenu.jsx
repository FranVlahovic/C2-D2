import GameMenuHeader from "./HeaderMenu";
import PausedMenu from "./PausedMenu";
import RenderedMenu from "./RenderedMenu";
import SettingsMenu from "./SettingsMenu";

export default function GameMenu({ handleTabSwitch, activeTab, closeMenu, handleScreenSwitch, resetScore, resetStart, activeOption, handleActiveOption, optionPreview, handleOptionPreview, playerName, setPlayerName, playerDeck, handleChosenDeck }){
    function handleRestart(){
        closeMenu();
        resetScore();
    }

    return (
        <div className="game-menu">
            <GameMenuHeader handleTabSwitch={handleTabSwitch} activeTab={activeTab} />
            <div className="game-menu-main">
                <div className="game-menu-buttons">
                    {activeTab === 'paused' && <PausedMenu closeMenu={closeMenu} handleScreenSwitch={handleScreenSwitch} handleRestart={handleRestart} resetStart={resetStart} handleActiveOption={handleActiveOption} handleOptionPreview={handleOptionPreview} />}
                    {activeTab === 'settings' && <SettingsMenu handleActiveOption={handleActiveOption} handleOptionPreview={handleOptionPreview} activeOption={activeOption} />}
                </div>
                <div className="game-menu-buttons-rendered">
                    <RenderedMenu activeOption={activeOption} optionPreview={optionPreview} playerName={playerName} setPlayerName={setPlayerName} playerDeck={playerDeck} handleChosenDeck={handleChosenDeck} />
                </div>
            </div>

            <div className="game-menu-footer">
                <div className="back-control">
                    <span>ESC</span>
                    <h3>Back</h3>
                </div>
            </div> 
        </div>
    );
}