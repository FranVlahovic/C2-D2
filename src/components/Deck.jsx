export default function Deck({faction, handleChosenDeck, handleScreenSwitch}){
    function handleClick(){
        handleChosenDeck(faction)
        handleScreenSwitch('game')
    }

    return (
        <div className="cardback" onClick={handleClick}>
            <div className="cardback-border">
                <img src={faction.image} alt={faction.imageAlt} />
            </div>
        </div>
    );
}