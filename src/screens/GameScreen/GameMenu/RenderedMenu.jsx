import GameOverStatsCard from "../../../components/GameStats";
import OptionPreview from "./OptionPreview";
import AudioTab from "./Tabs/AudioTab";
import ControlsTab from "./Tabs/ControlsTab";
import CreditsTab from "./Tabs/CreditsTab";
import GraphicsTab from "./Tabs/GraphicsTab";
import ProfileTab from "./Tabs/ProfileTab";

export default function RenderedMenu({
    activeOption,
    optionPreview,
    playerName,
    setPlayerName,
    playerDeck,
    handleChosenDeck,
    handleToggleSound,
    soundEnabled,
    handleToggleMusic, 
    musicEnabled,
    totalGames, 
    accPercentage, 
    correctGuesses, 
    wrongGuesses, 
    bestScore, 
    avgScore
}) {
    const options = [
        { name: 'resume', description: 'Continue your current game' },
        { name: 'restart', description: 'Start a new game from the beginning' },
        { name: 'reset all', description: 'Reset Everything' },
        { name: 'concede', description: 'Surrender the match' },
        { name: 'stats', description: 'View your gameplay stats' },
        { name: 'quit', description: 'Exit to the Main Menu' },
        { name: 'profile', description: 'Edit your account details' },
        { name: 'controls', description: 'Adjust game controls' },
        { name: 'graphics', description: 'Modify display settings' },
        { name: 'audio', description: 'Adjust sound settings' },
        { name: 'credits', description: 'View game credits' },
    ];

    return (
        <>
            {options.map(
                (option) =>
                    optionPreview === option.name && (
                        <OptionPreview
                            key={option.name}
                            heading={option.name.toUpperCase()}
                            description={option.description}
                        />
                    )
            )}

            {!optionPreview && activeOption === 'stats' && (
                <GameOverStatsCard 
                    totalGames={totalGames}
                    accPercentage={accPercentage}
                    correctGuesses={correctGuesses}
                    wrongGuesses={wrongGuesses}
                    bestScore={bestScore}
                    avgScore={avgScore}
                />
            )}

            {!optionPreview && activeOption === 'profile' && (
                <ProfileTab
                    playerName={playerName}
                    setPlayerName={setPlayerName}
                    playerDeck={playerDeck}
                    handleChosenDeck={handleChosenDeck}
                />
            )}


            {!optionPreview && activeOption === 'controls' && (
                <ControlsTab />
            )}

            {!optionPreview && activeOption === 'graphics' && (
                <GraphicsTab />
            )}

            {!optionPreview && activeOption === 'audio' && (
                <AudioTab handleToggleSound={handleToggleSound} soundEnabled={soundEnabled} handleToggleMusic={handleToggleMusic} musicEnabled={musicEnabled} />
            )}

            {!optionPreview && activeOption === 'credits' && (
                <CreditsTab />
            )}
        </>
    );
}
