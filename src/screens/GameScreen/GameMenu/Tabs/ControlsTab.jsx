import { useState } from "react";
import OptionPreview from "../OptionPreview";
import TabSlider from "./TabSlider";

export default function ControlsTab(){
    const [keyboardEnabled, setKeyboardEnabled] = useState(false);

    return(
        <div className="settings-rendered-container">
            <OptionPreview heading='CONTROLS' description='Adjust game controls' />

            <div className="rendered-tab">
                <div className="rendered-tab-title">
                    <h3>Keyboard Controls</h3>
                </div>
                <div className="rendered-tab-change">
                    <TabSlider onClick={()=>setKeyboardEnabled(prev => !prev)} stateName={keyboardEnabled} />
                    
                </div>
            </div>
        </div>
    )
}