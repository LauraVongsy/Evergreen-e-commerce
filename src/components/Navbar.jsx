import React, { useState } from "react";
import UserOverlay from "./UserOverlay";
import CartOverlay from "./CartOverlay";


import "../styles/navbar.scss";

export default function Navbar() {

  const [showModal, setShowModal] = useState(false);
  const [showSearchbar, setShowsearchbar] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleOpenSearchbar = () => {
    setShowsearchbar(true);
  };

  const handleCloseSearchbar = () => {
    setShowsearchbar(false);
  };
  const handleOpenCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <div className="navbar-container">
      <span className="navbar-blog">Le Blog</span>
      <div className="user-icon-container">
        <img
          className="navbar-icon"
          src="/assets/icons/User.png"
          alt="user icon"
          onClick={handleOpenModal}
        />
        {showModal && (
          <UserOverlay closeModal={handleCloseModal} />
        )}
      </div>
      <img
        className="navbar-icon"
        src="/assets/icons/Search.png"
        alt="search icon"
        onClick={handleOpenSearchbar}
      />
      {showSearchbar && (
        <div className="searchbar-container">
          <input className="search-input" type="text" placeholder="Rechercher..." />
          <button
            className="searchbar-closing-btn"
            onClick={handleCloseSearchbar}
          >
            X
          </button>
        </div>

      )}
      <img
        className="navbar-icon"
        src="/assets/icons/Cart.png"
        alt="cart icon"
        onClick={handleOpenCart}
      />
      {showCart && (
        <CartOverlay closeCart={handleCloseCart} />
      )}
    </div>
  );
}
