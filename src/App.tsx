import {useEffect, useState} from "react";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import {onAuthStateChanged, User} from "firebase/auth";
import {auth} from "./config/firebaseConfig.ts";
import MainWindow from "./component/MainWindow.tsx";
import MainMenu from "./component/MainMenu.tsx";
import LoginPage from "./component/LoginPage.tsx";
import Lobby from "./component/Lobby.tsx";

function App() {
    const [user, setUser] = useState<User | null>(null);
    const [gameId, setGameId] = useState<string | null>(null);

    const location = useLocation();

    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log("Logged in!");
            } else {
                setUser(null);
                console.log("Logged out!");
            }
        });
    }, []);

    useEffect(() => {
        const game = new URLSearchParams(location.search).get("id");

        if(game) {
            setGameId(game);
            console.log(game);
        }

        console.log(gameId);
    }, [user]);

    return (
        <MainWindow>
            <Routes>
                <Route path="/login" element={user ? <Navigate to="/" replace={true}/> : <LoginPage/>}/>
                <Route path="/" element={user ? <MainMenu/> : <Navigate to="/login" replace={true}/>}/>
                <Route path="/game" element={user ? <Lobby/> : <Navigate to="/login" replace={true}/>}/>
            </Routes>
        </MainWindow>
    );
}

export default App
