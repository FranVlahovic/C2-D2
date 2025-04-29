import empire from './assets/images/empire.svg';
import jedi from './assets/images/jedi.svg';
import resistance from './assets/images/resistance.svg';
import Deck from './components/Deck';


export default function FactionScreen({handleChosenDeck, handleScreenSwitch, factionText, handleFactionText, handleLoading, isLoading}) {

    const factions = [
        {
            id:0,
            name: 'Jedi order',
            image: jedi,
            imageAlt: 'Jedi Order Logo',
        },
        {
            id:1,
            name: 'Galactic Empire',
            image: empire,
            imageAlt: 'Galactic Empire Logo',
    
        },
        {
            id:2,
            name: 'Resistance',
            image: resistance,
            imageAlt: 'Resistance Logo',
        },
    ]

    return (
        <div className="faction-screen">
            <h2 className="faction-heading">{factionText}</h2>
            <div className="faction-select-container">
                {factions.map((faction) => (
                    <Deck key={faction.id} faction={faction} handleLoading={handleLoading} isLoading={isLoading} handleChosenDeck={handleChosenDeck} handleScreenSwitch={handleScreenSwitch} handleFactionText={handleFactionText} />  
                ))}
            </div>
            {isLoading && <span className='loader-spinner'></span>}
        </div>
    );
}