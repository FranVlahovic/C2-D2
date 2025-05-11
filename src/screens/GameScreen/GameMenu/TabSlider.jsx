export default function TabSlider({ onClick, stateName }){
    return (
        <div className="rendered-tab-slider">
            <button className='previous-button' onClick={onClick}> ‹ </button>
            <span>{stateName ? "Enabled" : 'Disabled'}</span>
            <button className='next-button' onClick={onClick}> › </button>
        </div>
    );
}