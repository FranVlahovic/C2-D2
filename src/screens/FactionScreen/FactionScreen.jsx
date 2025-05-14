import { useState } from 'react';

import { factions } from '../../data/factions';
import FactionChoice from './FactionChoice';

export default function FactionScreen({handleChosenDeck, handleScreenSwitch, handleLoading, isLoading }) {

    const [selectedFactionCard, setSelectedFactionCard] = useState();

    function handleClick(faction){
        setSelectedFactionCard(faction.id);
        handleChosenDeck(faction);
        handleLoading(true);;
        setTimeout(() => {
            handleLoading(false);
            handleScreenSwitch('game')
        }, 3000);
    }

    return (
        <div className="faction-screen">
            <div className="faction-select-heading">
                <h2 className="faction-heading">Choose your Faction</h2>
                <span>
                    The path you choose shapes your allegiance, but your destiny remains fixed. 
                    Your cardback will stand as a testament to your faction until the next game.
                </span>
            </div>
            <div className="faction-select-container">
                {factions.map((faction) => (
                    <FactionChoice mapKey={faction.id} name={faction.name} image={faction.image} imageAlt={faction.imageAlt} description={faction.description} handleClick={()=> handleClick(faction)} isLoading={isLoading} isSelected={selectedFactionCard === faction.id} />
                ))}
            </div>
            {isLoading && <span className='loader-spinner'></span>}
        </div>
    );
}