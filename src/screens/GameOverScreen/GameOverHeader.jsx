export default function GameOverHeader({ name, date, faction }){
    return (
        <div className="profile-banner-header">
            <div className="avatar-frame">
                <img src={faction.image} alt={faction.imageAlt} className="avatar-image" />
            </div>

            <div className="profile-name-date">
                <h2>{name}</h2>
                <p>Last updated: {date}</p>
            </div>
        </div>
    );
}