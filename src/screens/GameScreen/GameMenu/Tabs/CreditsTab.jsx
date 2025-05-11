import OptionPreview from "../OptionPreview";

export default function CreditsTab(){
    return(
        <div className="settings-rendered-container">
            <OptionPreview heading='CREDITS' description='View game credits' />

            <div className="rendered-tab-credits">
                <h3>Game Design & Development</h3>
                <p>Created by <a target="_blank" href="https://github.com/FranVlahovic/">FranVlahovic</a></p>
            </div>

            <div className="rendered-tab-credits">
                <h3>Music & Sound</h3>
                <p>Provided by <a target="_blank" href="https://pixabay.com/">Pixabay</a></p>
            </div>

            <div className="rendered-tab-credits">
                <h3>Images & Icons</h3>
                <div className="credits-sources">
                    <p>Wallpapers from <a target="_blank" href="https://wallhaven.cc/">WallHaven</a></p>
                    <p>UI Icons from <a target="_blank" href="https://pictogrammers.com/">Pictogrammers</a></p>
                </div>
            </div>

            <div className="rendered-tab-credits">
                <h3> StarWars API</h3>
                <div className="credits-sources">
                    <p>Provided by <a target="_blank" href="https://github.com/akabab">Akabab</a></p>
                </div>
            </div>

            <div className="rendered-tab-copyright">
                <h3>Copyright</h3>
                <p>
                    All external assets used in this game — including music, images, and fonts — are credited to their original creators and used under the terms of their respective licenses (e.g., Creative Commons).
                    This project is made purely for non-commercial, educational, and entertainment purposes.
                    No copyright infringement intended.
                </p>
            </div>
        </div>
    );
}