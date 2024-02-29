import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';
import { useAuth } from "./AuthContext";

export default function UserOverlay() {
    const userContext = useContext(UserContext);
    const { email, setEmail, setPassword, password,
        handleSignIn, isLogged, errorMessage } = userContext;
    const { signInWithGoogle } = useAuth();
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
        const isValidPassword = passwordRegex.test(newPassword);
        setIsPasswordValid(isValidPassword);
    };

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
                    maxLength="50"
                />
                <label htmlFor="password">Mot de passe :</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    maxLength="50"
                />
                {!isPasswordValid && (
                    <p style={{ color: 'red' }}>
                        Le mot de passe doit avoir au moins 8 caractères, un caractère spécial et un chiffre.
                    </p>
                )}
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


const commentaireUtilisateur = "<script>alert('XSS attack!');</script>";