import {auth} from "../config/firebaseConfig.ts";
import {signOut} from "firebase/auth";

function MainMenu() {
    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log("logged out");
        })
    }

    return (
        <div className="container align-content-center">
            <div className="d-grid gap-2">
                <button className="btn btn-primary h3">
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