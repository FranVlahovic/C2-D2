export default function CardComponent({ id, first,last, image, imageAlt, factionImage, factionImageAlt, power }){
    return(
        <div className="card-container" id={id}>
            <div className="card-image-pwr">
                <img src={image} alt={imageAlt} />
                <span className="card-pwr">{power}</span>
            </div>
            <div className="card-name-faction">
                <div className="full-name">
                    <h2>{first}</h2>
                    <h2>{last}</h2>
                </div>
                <img src={factionImage} alt={factionImageAlt} />
            </div>
        </div>
    );
}
