import { useState, useEffect } from "react";

export default function StartScreen({ handleScreenSwitch }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth<=768)
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if(isMobile){
        return (
            <div className="startscreen">
                <div className="startscreen-heading">
                    <h1>Announcement</h1>
                    <p>This droid prefers desktops! Try again on a larger screen for full functionality.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="startscreen" onClick={()=>handleScreenSwitch('disclaimer')}>
            <div className="startscreen-heading">
                <h1>C2-D2</h1>
                <p>Click anywhere to begin</p>
            </div>
        </div>
    );
}
