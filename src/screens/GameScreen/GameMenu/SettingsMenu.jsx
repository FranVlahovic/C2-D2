import TextButton from "../../../components/TextButton";

export default function SettingsMenu({ handleActiveOption, handleOptionPreview }){
    const buttons = [
        { name: 'profile', action: () => handleActiveOption('profile') },
        { name: 'controls', action: () => handleActiveOption('controls') },
        { name: 'graphics', action: () => handleActiveOption('graphics') },
        { name: 'audio', action: () => handleActiveOption('audio') },
        { name: 'credits', action: () => handleActiveOption('credits') },
    ]
    
    return (
        <div className="settings-buttons">
            {buttons.map(({ name, action }) => (
                <TextButton key={name} onMouseEnter={()=> handleOptionPreview(name)} onMouseLeave={()=>handleOptionPreview('')} onClick={action} text={name.toUpperCase()} />
            ))}
        </div>
    );

}