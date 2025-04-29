export default function Introduction({setPlayerName, playerName, handleLoading, isLoading, setCurrentScreen}){
    function handleSubmit(e){
        e.preventDefault();
        handleLoading(true);
        setTimeout(() => {
            handleLoading(false);
            setCurrentScreen('faction');
        }, 4000)
    }

    return (
        <div className="introduction-screen">
            <div className="introduction">
                <div className="introduction-heading">
                    <h2>Enter your name</h2>
                    <p>You there! State your indentification citizen.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <input id="playerName" type="text" value={playerName} autoFocus autoComplete="off" onChange={(e)=> setPlayerName(e.target.value)} required />
                </form>
            
            </div>
            {isLoading && <span className='loader-spinner'></span>}
        </div>
    );
}