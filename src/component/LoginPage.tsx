import {signInAnonymously, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {auth} from '../config/firebaseConfig';

function LoginPage() {
    const handleAnonymousLogin = () => {
        signInAnonymously(auth)
            .then(() => {
                console.log("Logged in anonymously");
            })
            .catch((error) => {
                console.error("Anonymous login error:", error.code, error.message);
            })
            .finally(() => {
            });
    };

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(() => {
                console.log("Logged in with Google");
            })
            .catch((error) => {
                console.error("Google login error:", error.code, error.message);
            })
            .finally(() => {
            });
    };

    return (
        <div className="container align-content-center">
            <div className="d-grid gap-2">
                <button className="btn btn-primary h3" onClick={handleAnonymousLogin}>
                    Sign In Anonymously
                </button>
                <button className="btn btn-primary h3" onClick={handleGoogleLogin}>
                    Sign In With Google
                </button>
            </div>
        </div>
    );
}

export default LoginPage;
