import OptionPreview from "./OptionPreview";
import ControlsTab from "./Tabs/ControlsTab";
import GraphicsTab from "./Tabs/GraphicsTab";
import ProfileTab from "./Tabs/ProfileTab";

export default function RenderedMenu({
    activeOption,
    optionPreview,
    playerName,
    setPlayerName,
    playerDeck,
    handleChosenDeck,
}) {
    const options = [
        { name: 'resume', description: 'Continue your current game' },
        { name: 'restart', description: 'Start a new game from the beginning' },
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
        </>
    );
}
