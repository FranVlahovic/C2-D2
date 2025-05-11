import TextButton from "../../../components/TextButton";

export default function SettingsMenu({ handleActiveOption, handleOptionPreview, activeOption }){
    const buttons = [
        { name: 'profile' },
        { name: 'controls' },
        { name: 'graphics' },
        { name: 'audio' },
        { name: 'credits' },
    ]
    
    return (
        <div className="settings-buttons">
            {buttons.map(({ name }) => (
                <TextButton key={name} onMouseEnter= {() => activeOption !== name && handleOptionPreview(name)} onMouseLeave={()=> handleOptionPreview('')} onClick={() => {handleActiveOption(name);handleOptionPreview('')}} text={name.toUpperCase()} />
            ))}
        </div>
    );

}