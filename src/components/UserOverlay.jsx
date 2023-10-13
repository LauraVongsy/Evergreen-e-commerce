import React from 'react'
import Modal from 'react-bootstrap/Modal';

export default function UserOverlay({ closeModal }) {
    return (
        <div className="overlayUser">
            <p>Connectez-vous :</p>
            <label htmlFor="">Email :</label>
            <input type="email" />
            <label htmlFor="">Mot de passe :</label>
            <input type="password" />
            <button className="validate-btn">Valider</button>
            <button className="social-btn">
                {" "}
                <img
                    className="social-icons"
                    src="/assets/socials/google.png"
                    alt=""
                />{" "}
                Se connecter avec Google
            </button>
            <button className="social-btn">
                {" "}
                <img
                    className="social-icons"
                    src="/assets/socials/instagram.png"
                    alt=""
                />{" "}
                Se connecter avec Instagram
            </button>
            <button
                className="closing-btn"
                onClick={closeModal}
            >
                X
            </button>
        </div>
    )
}
