import Arrow from '../../assets/icons/arrow-down.svg';

export default function GameControls({ handleClick }){
    return (
        <div className="game-controls">
            <button className="lower-btn" aria-label="Guess lower card"><img src={Arrow} alt="Arrow down" onClick={()=>handleClick('lower')} /></button>
            <button className="higher-btn" aria-label="Guess higher card"><img src={Arrow} alt="Arrow up" onClick={()=>handleClick('higher')} /></button>
        </div>
    );
}