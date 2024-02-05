import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';
import { useAuth } from "./AuthContext";

export default function UserOverlay() {
    const userContext = useContext(UserContext);
    const { email, setEmail, setPassword, password, handleSignIn, isLogged, errorMessage } = userContext;
    console.log('error message useroverlay', errorMessage);
    const { signInWithGoogle } = useAuth();


    return (
        !isLogged ? (
            <div className="overlayUser">
                <p>Connectez-vous :</p>
                <label htmlFor="email">Email :</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Mot de passe :</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="validate-btn" onClick={(e) => handleSignIn(e)}>
                    Valider
                </button>
                {errorMessage ? <span>{`erreur:${errorMessage}`}</span> : null}


                <button onClick={signInWithGoogle} className="social-btn">
                    {" "}
                    <img
                        className="social-icons"
                        src="/assets/socials/google.png"
                        alt=""
                    />{" "}
                    Se connecter avec Google
                </button>
                <Link className='register' to="/signup">M'inscrire</Link>
            </div>
        ) : null
    );

}
