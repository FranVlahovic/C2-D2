import GameMenuHeader from "./HeaderMenu";
import PausedMenu from "./PausedMenu";
import RenderedMenu from "./RenderedMenu";
import SettingsMenu from "./SettingsMenu";

export default function GameMenu({ handleTabSwitch, activeTab }){
    return (
        <div className="game-menu">
            <GameMenuHeader handleTabSwitch={handleTabSwitch} />
            <div className="game-menu-main">
                <div className="game-menu-buttons">
                    {activeTab === 'paused' && <PausedMenu />}
                    {activeTab === 'settings' && <SettingsMenu />}
                </div>
                <div className="game-menu-buttons-rendered">
                    <RenderedMenu />
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