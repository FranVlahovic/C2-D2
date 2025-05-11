import OptionPreview from "../OptionPreview";
import TabSlider from "./TabSlider";

export default function AudioTab({ handleToggleSound, soundEnabled, handleToggleMusic, musicEnabled }){
    
    return(
        <div className="settings-rendered-container">
            <OptionPreview heading='AUDIO' description='Adjust sound settings' />
        
            <div className="rendered-tab">
                <div className="rendered-tab-title">
                    <h3>Sound Effects</h3>
                </div>
                <div className="rendered-tab-change">
                    <TabSlider onClick={()=>handleToggleSound()} stateName={soundEnabled} />
                </div>
            </div>
            <div className="rendered-tab">
                <div className="rendered-tab-title">
                    <h3>Music</h3>
                </div>
                <div className="rendered-tab-change">
                    <TabSlider onClick={()=>handleToggleMusic()} stateName={musicEnabled} />
                </div>
            </div>
        </div>
    );
}