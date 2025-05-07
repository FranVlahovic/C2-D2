export default function Scoreboard({className, text, value, isScore}){
    return (
        <div className={className}>
            {isScore ? <span>{value}</span> : <h2>{text}</h2>}
            {isScore ? <h2>{text}</h2> : <span>{value}</span>}
        </div>
    );
}