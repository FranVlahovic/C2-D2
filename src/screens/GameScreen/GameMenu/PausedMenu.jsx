import TextButton from "../../../components/TextButton";

export default function PausedMenu({ closeMenu, handleScreenSwitch, handleRestart, resetStart, handleOptionPreview, resetStats }){
    const buttons = [
        { name: 'resume', action: closeMenu },
        { name: 'restart', action: handleRestart },
        { name: 'reset all', action: resetStats },
        { name: 'concede', action: () => handleScreenSwitch('game-over') },
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