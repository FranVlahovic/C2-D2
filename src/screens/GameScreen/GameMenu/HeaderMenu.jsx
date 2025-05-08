export default function GameMenuHeader({ handleTabSwitch }){
    return (
        <div className="game-menu-header">
            <button autoFocus className="paused-tab" onClick={() => handleTabSwitch('paused')}>PAUSED</button>
            <button className="settings-tab" onClick={() => handleTabSwitch('settings')}>SETTINGS</button>
        </div>
            
    );
}