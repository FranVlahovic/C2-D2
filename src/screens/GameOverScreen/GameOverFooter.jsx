import TextButton from "../../components/TextButton";

export default function GameOverFooter({ playAction, menuAction }){
    return(
        <div className="game-over-footer">
            <TextButton text='Play Again' onClick={playAction} className="game-over-play-again" />
            <TextButton text='Main Menu' onClick={menuAction} className="game-over-main-menu" />
        </div>
    );
}