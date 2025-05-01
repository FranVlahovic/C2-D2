export default function Deck({data, onClick, onMouseEnter, onMouseLeave }) {
    return (
        <div className="cardback" onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className="cardback-border">
                <img src={data.image} alt={data.imageAlt} />
            </div>
        </div>
    );
}
  