import { factions } from "../../../../data/factions";
import OptionPreview from "../OptionPreview";

export default function ProfileTab({ playerName, setPlayerName, playerDeck, handleChosenDeck }){
    return (
        <div className="settings-rendered-container">
            <OptionPreview heading='PROFILE' description='Edit your account details'/>
            
            <div className="rendered-tab">
                <div className="rendered-tab-title">
                    <h3>Profile Name</h3>
                </div>
                <div className="rendered-tab-change">
                    <form>
                        <input id="playerName" type="text" maxLength={12} minLength={3} value={playerName} aria-label="Enter Name" autoComplete="off" onChange={(e)=> setPlayerName(e.target.value)} />
                    </form>
                </div>
            </div>
            <div className="rendered-tab">
                <div className="rendered-tab-title">
                    <h3>Faction</h3>
                </div>
                <div className="rendered-tab-change">
                    <select id="factionSelect" value={playerDeck.name} onChange={(e) => handleChosenDeck(factions.find(faction => faction.name === e.target.value))}>
                        <option hidden>{playerDeck.name}</option>
                        {factions.map((faction) => (
                            <option key={faction.name} value={faction.name}>{faction.name}</option>
                        ))} 
                    </select>
                </div>
            </div>
        </div>
    );
}