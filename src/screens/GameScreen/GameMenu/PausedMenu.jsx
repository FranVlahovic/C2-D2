import TextButton from "../../../components/TextButton";

export default function PausedMenu({ closeMenu, handleScreenSwitch, handleRestart, resetStart, handleActiveOption, handleOptionPreview, resetStats }){
    const buttons = [
        { name: 'resume', action: closeMenu },
        { name: 'restart', action: handleRestart },
        { name: 'reset stats', action: resetStats },
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