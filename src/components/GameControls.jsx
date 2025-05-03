import Arrow from '../assets/icons/arrow-down.svg';

export default function GameControls({ handleClick }){
    return (
        <div className="game-controls">
            <button className="lower-btn"><img src={Arrow} alt="Arrow down" onClick={()=>handleClick('lower')} /></button>
            <button className="higher-btn"><img src={Arrow} alt="Arrow up" onClick={()=>handleClick('higher')} /></button>
        </div>
    );
}