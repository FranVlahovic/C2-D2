export default function ProfileBanner({name, deck}){
    return (
        <div className="profile-banner">
            <h3>{name}</h3>
            <img src={deck.image} alt={deck.imageAlt} />
        </div>
    );
}