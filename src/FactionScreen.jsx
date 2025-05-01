import Deck from './components/Deck';
import { factions } from './data/factions';

export default function FactionScreen({handleChosenDeck, handleScreenSwitch, factionText, handleFactionText, handleLoading, isLoading}) {

    function handleClick(faction){
        handleChosenDeck(faction)
        handleLoading(true);
        setTimeout(() => {
            handleLoading(false);
            handleScreenSwitch('game')
        }, 3000);
    }

    function handleMouseEnter(factionName){
        !isLoading && handleFactionText(factionName);
    }

    function handleMouseLeave(){
        !isLoading && handleFactionText('Choose your Faction'); 
    }

    return (
        <div className="faction-screen">
            <h2 className="faction-heading">{factionText}</h2>
            <div className="faction-select-container">
                {factions.map((faction) => (
                    <Deck key={faction.id} data={faction} onClick={()=>handleClick(faction)} onMouseEnter={()=>handleMouseEnter(faction.name)} onMouseLeave={handleMouseLeave} />  
                ))}
            </div>
            {isLoading && <span className='loader-spinner'></span>}
        </div>
    );
}