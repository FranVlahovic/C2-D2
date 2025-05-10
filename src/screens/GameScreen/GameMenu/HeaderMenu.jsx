export default function GameMenuHeader({ handleTabSwitch, activeTab }){
    return (
        <div className="game-menu-header">
            <button autoFocus className={`paused-tab ${activeTab === "paused" ? "selected-tab" : ""}`} onClick={() => handleTabSwitch('paused')}>PAUSED</button>
            <button className={`settings-tab ${activeTab === "settings" ? "selected-tab" : ""}`} onClick={() => handleTabSwitch('settings')}>SETTINGS</button>
        </div>     
    );
}