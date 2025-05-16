export default function GameOverHeader({ name, faction, correctGuesses }){
    const updatedDate = new Date();

    function getRank(condition){
        if(condition < 50) return 'bronzeBorder';
        if(condition < 100) return 'silverBorder';
        if(condition < 200) return 'goldBorder';
        return 'diamondBorder';
    }
    
        
    return (
        <div className="game-over-header">
            <div className="profile-banner-header">
                <div className={`avatar-frame ${getRank(correctGuesses)}`}>
                    <img src={faction.image} alt={faction.imageAlt} className="avatar-image" />
                </div>

                <div className="profile-name-date">
                    <h2>{name}</h2>
                    <p>{`As of ${updatedDate.toLocaleString("en-GB", {timeStyle:"short", dateStyle: "long"})}`}</p>
                </div>
            </div>
            
        </div>
    );
}