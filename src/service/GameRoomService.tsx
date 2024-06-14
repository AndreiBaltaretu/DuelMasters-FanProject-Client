import {auth} from "../config/firebaseConfig.ts";

export const createRoom = async () => {
    if(auth.currentUser) {
        const requestBody = {
            uid: auth.currentUser.uid,
            name: auth.currentUser.displayName || 'Guest'
        };

        try {
            const response = await fetch("http://localhost:8080/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });

            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log("Not logged in!");
    }
}

export const joinRoom = async () => {
    if(auth.currentUser) {
        const requestBody = {
            gameId: "805b63de-4b73-4265-ba29-92bf3b7af6c3",
            player: {
                uid: auth.currentUser.uid,
                name: auth.currentUser.displayName || 'Guest'
            }
        }

        try {
            const response = await fetch("http://localhost:8080/join", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });

            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log("Not logged in!");
    }
}