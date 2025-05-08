export default function FactionChoice({ key, name, image, imageAlt, description, handleClick, isLoading }){
    return(
        <div className={!isLoading ? "faction-card" : "faction-card disabled"} key={key} onClick={handleClick}  >
            <img src={image} alt={imageAlt} />
            <div className="card-info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}