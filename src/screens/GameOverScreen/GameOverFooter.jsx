import TextButton from "../../components/TextButton";

export default function GameOverFooter({ handleRestart, resetStart }){
    return(
        <div className="game-over-footer">
            <TextButton text='Play Again' onClick={resetStart} className="game-over-play-again" />
            <TextButton text='Main Menu' onClick={handleRestart} className="game-over-main-menu" />
        </div>
    );
}