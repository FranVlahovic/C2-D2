import OptionPreview from "./OptionPreview";

export default function RenderedMenu({ activeOption, optionPreview }){
    return (
        <>
            {optionPreview === 'resume' && <OptionPreview heading='RESUME' description='Continue your current game'/>}
            {optionPreview === 'restart' && <OptionPreview heading='RESTART' description='Start a new game from the beginning'/>}
            {optionPreview === 'concede' && <OptionPreview heading='CONCEDE' description='Surrender the match'/>}
            {optionPreview === 'stats' && <OptionPreview heading='STATS' description='View your gameplay stats'/>}
            {optionPreview === 'quit' && <OptionPreview heading='QUIT' description='Exit to the Main Menu'/>}
            
            {optionPreview === 'profile' && <OptionPreview heading='PROFILE' description='Edit your account details'/>}
            {optionPreview === 'controls' && <OptionPreview heading='CONTROLS' description='Adjust game controls'/>}
            {optionPreview === 'graphics' && <OptionPreview heading='GRAPHICS' description='Modify display settings'/>}
            {optionPreview === 'audio' && <OptionPreview heading='AUDIO' description='Adjust sound settings'/>}
            {optionPreview === 'credits' && <OptionPreview heading='CREDITS' description='View game credits'/>}
            
            {!optionPreview && activeOption === 'stats' && <h2>rendered stats</h2>}


        </>
    );
}