import React, { useState, useRef, useEffect } from "react";
import UserOverlay from "./UserOverlay";
import CartOverlay from "./CartOverlay";
import { Link } from "react-router-dom";
import "../styles/navbar.scss";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [showSearchbar, setShowSearchbar] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const userOverlayRef = useRef();
  const cartOverlayRef = useRef();


  const handleOpenModal = () => {
    setShowModal(true);
  };


  const handleOpenSearchbar = () => {
    setShowSearchbar(true);
  };

  const handleCloseSearchbar = () => {
    setShowSearchbar(false);
  };

  const handleOpenCart = () => {
    setShowCart(true);
  };


  useEffect(() => {
    // userOverlayRef.current et cartOverlayRef.current veulent dire qu'on est dans l'Overlay
    // et de ce fait si on est dans l'overlay setShowModal reste true.

    const handleOutsideClick = (event) => {
      if (userOverlayRef.current && !userOverlayRef.current.contains(event.target)) {
        setShowModal(false);
      }
      if (cartOverlayRef.current && !cartOverlayRef.current.contains(event.target)) {
        setShowCart(false);
      }

    };

    //  document.addEventListener pour écouter les clics à l'échelle de la page.
    //  Chaque fois qu'un clic se produit, la fonction handleOutsideClick est appelée.

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="navbar-container">
      <Link className="navbar-blog" to="/blog">
        <span>Le Blog</span>
      </Link>

      {/* ref fait référence à un élément du DOM du composant
      ref={userOverlayRef} est ajouté à la <div> contenant l'overlay de l'utilisateur
       et ref={cartOverlayRef} est ajouté à la <div> contenant l'overlay du panier. */}

      <div className="user-icon-container" ref={userOverlayRef}>
        <img
          className="navbar-icon"
          src="/assets/icons/User.png"
          alt="user icon"
          onClick={handleOpenModal}
        />
        {showModal && <UserOverlay handleCloseSearchbar={handleCloseSearchbar} />}
      </div>
      <img
        className="navbar-icon"
        src="/assets/icons/Search.png"
        alt="search icon"
        onClick={handleOpenSearchbar}
      />
      {showSearchbar && (
        <SearchBar closeSearchBar={handleCloseSearchbar} />
      )}
      <div className="cart-icon-container" ref={cartOverlayRef}>
        <img
          className="navbar-icon"
          src="/assets/icons/Cart.png"
          alt="cart icon"
          onClick={handleOpenCart}
        />
        {showCart && <CartOverlay />}
      </div>
    </div>
  );
}
