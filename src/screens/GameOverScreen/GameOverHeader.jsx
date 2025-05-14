export default function GameOverHeader({ name, faction }){
    const updatedDate = new Date();

    return (
        <div className="game-over-header">
            <div className="profile-banner-header">
                <div className="avatar-frame">
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