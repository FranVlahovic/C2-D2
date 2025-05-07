import { useEffect } from 'react';

export default function StartScreen({ handleScreenSwitch }) {
    useEffect(() => {
        function handleAnyInput() {
            handleScreenSwitch('disclaimer');
        }

        window.addEventListener('keydown', handleAnyInput);
        window.addEventListener('click', handleAnyInput);

        return () => {
            window.removeEventListener('keydown', handleAnyInput);
            window.removeEventListener('click', handleAnyInput);
        };
    }, [handleScreenSwitch]);

    return (
        <div className="startscreen">
            <div className="startscreen-heading">
                <h1>C2-D2</h1>
                <p>Click anywhere to begin</p>
            </div>
        </div>
    );
}
