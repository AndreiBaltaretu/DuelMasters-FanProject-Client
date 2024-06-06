import {useEffect, useState} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {onAuthStateChanged, User} from "firebase/auth";
import {auth} from "./config/firebaseConfig.ts";
import MainWindow from "./components/MainWindow.tsx";
import MainMenu from "./components/MainMenu.tsx";
import LoginPage from "./components/LoginPage.tsx";

function App() {
    const [user, setUser] = useState<User | null>(null);

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

    return (
        <MainWindow>
            <Routes>
                <Route path="/login" element={user ? <Navigate to="/" replace={true}/> : <LoginPage/>}/>
                <Route path="/" element={user ? <MainMenu/> : <Navigate to="/login" replace={true}/>}/>
            </Routes>
        </MainWindow>
    );
}

export default App
