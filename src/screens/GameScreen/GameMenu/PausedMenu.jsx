import TextButton from "../../../components/TextButton";

export default function PausedMenu({ closeMenu, handleScreenSwitch, handleRestart, resetStart, handleActiveOption, handleOptionPreview }){
    const buttons = [
        { name: 'resume', action: closeMenu },
        { name: 'restart', action: handleRestart },
        { name: 'concede', action: () => handleScreenSwitch('game-over') },
        { name: 'stats', action: () => handleActiveOption('stats') },
        { name: 'quit', action: resetStart }
    ]
    
    return(
        <div className="paused-buttons">
            {buttons.map(({ name, action }) => (
                <TextButton key={name} onMouseEnter={()=> handleOptionPreview(name)} onMouseLeave={()=>handleOptionPreview('')} onClick={action} text={name.toUpperCase()} />
            ))}
        </div>
    );
}