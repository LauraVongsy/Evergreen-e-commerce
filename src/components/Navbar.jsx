import React, { useState } from "react";
import "../styles/navbar.scss";

export default function Navbar() {
  const [userModal, setUserModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);

  return (
    <div className="navbar-container">
      <p className="navbar-blog">Le Blog</p>
      <img
        onClick={() => setUserModal(true)}
        className="navbar-icon"
        src="/assets/icons/User.png"
        alt="user icon"
      />
      {userModal ? (
        <div className="overlayUser">
          <p>Connectez vous:</p>
          <label htmlFor="">Email:</label>
          <input type="email" />
          <label htmlFor="">Mot de passe:</label>
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
          <button className="closing-btn" onClick={() => setUserModal(false)}>
            X
          </button>
        </div>
      ) : (
        ""
      )}
      <img
        className="navbar-icon"
        src="/assets/icons/Search.png"
        alt="search icon"
      />
      <img
        onClick={() => setCartModal(true)}
        className="navbar-icon"
        src="/assets/icons/Cart.png"
        alt="cart icon"
      />
    </div>
  );
}
