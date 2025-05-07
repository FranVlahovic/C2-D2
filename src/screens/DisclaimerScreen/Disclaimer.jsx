import { useEffect } from "react";
import TextButton from "../../components/TextButton";

export default function DisclaimerScreen({ handleScreenSwitch, bestScore }) {
    useEffect(() => {
        const interval = setInterval(() => {
            handleScreenSwitch('introduction');
        }, 15000);

        return () => {
            clearInterval(interval);
        };

    }, [handleScreenSwitch]);
    
    return (
        <div className="disclaimer-screen">
            <div className="disclaimer-section">
                <h2>Disclaimer</h2>
                <p>
                    This fan-made game is not affiliated with or endorsed by Lucasfilm or Disney. 
                    All Star Wars-related trademarks and copyrights belong to Lucasfilm and Disney.
                    This project is non-commercial and for entertainment purposes only.
                </p>
                <span className="loader"></span>
                {bestScore > 0 && <TextButton className="skip-btn" text='Skip' onClick={()=> handleScreenSwitch('introduction')} /> }
            </div>
        </div>
    );
}
