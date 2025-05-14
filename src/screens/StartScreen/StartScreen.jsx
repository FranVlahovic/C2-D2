export default function StartScreen({ handleScreenSwitch }) {

    return (
        <div className="startscreen" onClick={()=>handleScreenSwitch('disclaimer')}>
            <div className="startscreen-heading">
                <h1>C2-D2</h1>
                <p>Click anywhere to begin</p>
            </div>
        </div>
    );
}
