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



  return (
    <div className="navbar-container">
      <ShopButton />
      {isLogged ? (
        <DropdownButton
          id="dropdown-item-button"
          title={`Bienvenue ${userFirstname}`}
        >
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
        <span className="badge" id="lblCartCount">
          {numberOfItems()}
        </span>
        {showCart && <CartOverlay />}
      </div>
    </div>
  );
}