export default function Deck({handleLoading, faction, handleChosenDeck, handleScreenSwitch, handleFactionText, isLoading}){
    function handleClick(){
        handleChosenDeck(faction)
        handleLoading(true);
        setTimeout(() => {
            handleLoading(false);
            handleScreenSwitch('game')
        }, 4000);
    }

    return (
        <div className="cardback" onClick={handleClick} onMouseEnter={()=> !isLoading && handleFactionText(faction.name)} onMouseLeave={()=>!isLoading && handleFactionText('Choose your Faction')}>
            <div className="cardback-border">
                <img src={faction.image} alt={faction.imageAlt} />
            </div>
        </div>
    );
}