import React, { useState, useRef, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";
import UserOverlay from "./UserOverlay";
import CartOverlay from "./CartOverlay";
import { Link } from "react-router-dom";
import "../styles/navbar.scss";
import SearchBar from "./SearchBar";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  const { isLogged, userFirstname } = useContext(UserContext);
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
      if (
        userOverlayRef.current &&
        !userOverlayRef.current.contains(event.target)
      ) {
        setShowModal(false);
      }
      if (
        cartOverlayRef.current &&
        !cartOverlayRef.current.contains(event.target)
      ) {
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

  const handleLogout = () => {
    localStorage.clear();
    UserContext.isLogged = false;
    window.location.reload();
  };

  return (
    <div className="navbar-container">
      <Link className="navbar-blog" to="/blog">
        <span>Le Blog</span>
      </Link>
      {isLogged ? (
        <DropdownButton
          id="dropdown-item-button"
          title={`Bienvenue ${userFirstname}`}
        >
          <Dropdown.Item as="button">
            <Link className="category-links" to="/compte">
              Mon compte
            </Link>
          </Dropdown.Item>
          <Dropdown.Item as="button">
            <Link className="category-links" to="/">
              Mes commandes
            </Link>
          </Dropdown.Item>
          <Dropdown.Item as="button">
            <Link className="category-links" to="">
              Mes informations
            </Link>
          </Dropdown.Item>
          <Dropdown.Item as="button">
            <Link
              onClick={() => handleLogout()}
              className="category-links"
              to="/"
            >
              Me déconnecter
            </Link>
          </Dropdown.Item>
        </DropdownButton>
      ) : (
        <div className="user-icon-container" ref={userOverlayRef}>
          <img
            className="navbar-icon"
            src="/assets/icons/User.png"
            alt="user icon"
            onClick={handleOpenModal}
          />
          {showModal && (
            <UserOverlay handleCloseSearchbar={handleCloseSearchbar} />
          )}
        </div>
      )}

      <img
        className="navbar-icon"
        src="/assets/icons/Search.png"
        alt="search icon"
        onClick={handleOpenSearchbar}
      />
      {showSearchbar && <SearchBar closeSearchBar={handleCloseSearchbar} />}
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
