import {auth} from "../config/firebaseConfig.ts";
import {signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {createRoom} from "../service/GameRoomService.tsx";

function MainMenu() {
    const navigate = useNavigate();

    const handleCreateRoom = async () => {
        await createRoom();
        console.log("create room");
        navigate("/game")
    }

    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log("logged out");
        })
    }

    return (
        <div className="container align-content-center">
            <div className="d-grid gap-2">
                <button className="btn btn-primary h3" onClick={handleCreateRoom}>
                    Create game room
                </button>
                <button className="btn btn-primary h3">
                    Card decks
                </button>
                <button className="btn btn-primary h3">
                    All cards database
                </button>
                <br/>
                <br/>
                <button className="btn btn-primary h3" onClick={handleSignOut}>
                    Sign out
                </button>
            </div>
        </div>
    );
}

export default MainMenu;