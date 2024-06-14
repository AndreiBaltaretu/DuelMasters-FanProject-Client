import {useState} from "react";
import Game from "./Game.tsx";

function Lobby() {
    const [inProgress, setInProgress] = useState<boolean>(false);

    const handleStartGame = () => {
        setInProgress(true);
    }

    if(inProgress) {
        return <Game/>
    }

    return (
        <div className="container align-content-center">
            <div className="d-grid gap-2">
                <button className="btn btn-primary h3" onClick={handleStartGame}>
                    Start game
                </button>
            </div>
        </div>
    );
}

export default Lobby;