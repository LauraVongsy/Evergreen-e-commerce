import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import BurgerButton from "./BurgerButton";
import { UserContext } from "./UserContext";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { AuthContext } from "./AuthContext.jsx";
import { CartContext } from "./CartContext.jsx";
import UserOverlay from "./UserOverlay";
import CartOverlay from "./CartOverlay";





export default function NavbarMobile() {
  const [showModal, setShowModal] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const userOverlayRef = useRef();
  const cartOverlayRef = useRef();
  const { setIsLogged, isLogged, userFirstname, setUserFirstname, setUserLastname } = useContext(UserContext);
  const { numberOfItems } = useContext(CartContext);

  const { signOutUser } = useContext(AuthContext);

  const handleOpenModal = () => {

    setShowModal(true);
  };
  const handleOpenCart = () => {
    setShowCart(true);
  };
  useEffect(() => {
    // userOverlayRef.current et cartOverlayRef.current veulent dire qu'on est dans l'Overlay
    // et si on est dans l'overlay setShowModal reste true.

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

  const handleLogout = async () => {
    try {
      await signOutUser();
      setIsLogged(false);
      setUserFirstname('');
      setUserLastname('');
      localStorage.clear();
      window.location.reload();

    } catch (error) {
      console.error("Error signing out:", error);
    }

  };

  return (
    <div className="navbar-container">
      <BurgerButton />

      {isLogged ? (
        <DropdownButton
          id="dropdown-item-button"
          title={<img
            className="navbar-icon"
            src="/assets/icons/User.png"
            alt="user icon"

          />}
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
            <UserOverlay />
          )}
        </div>
      )}
      <div className="cart-icon-container" ref={cartOverlayRef}>
        <img
          className="navbar-icon"
          src="/assets/icons/Cart.png"
          alt="cart icon"
          onClick={handleOpenCart}
        />
        <span className="badge" id="lblCartCount">
          {numberOfItems()}
        </span>
        {showCart && <CartOverlay />}
      </div>
    </div>
  );
}