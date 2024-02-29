import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/searchBarOverlay.scss"



export default function SearchBar({ closeSearchBar }) {

    const [product, setProduct] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const [showSearchBarOverlay, setShowSearchBarOverlay] = useState(true);
    const searchbarOverlayRef = useRef();

    const handleInputChange = (event) => {
        setInputValue(event.target.value.toString().toLowerCase());
        setShowSearchBarOverlay(true);
    };

    useEffect(() => {
        // .current veut dire qu'on est dans l'Overlay
        // et de ce fait si on est dans l'overlay setShow reste true.

        const handleOutsideClick = (event) => {
            console.log(searchbarOverlayRef);
            if (searchbarOverlayRef.current && !searchbarOverlayRef.current.contains(event.target)) {
                setShowSearchBarOverlay(false);

            }
        };

        //  document.addEventListener pour écouter les clics à l'échelle de la page.
        //  Chaque fois qu'un clic se produit, la fonction handleOutsideClick est appelée.

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/products", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });

                const data = await response.json();
                console.log(data)
                setProduct(data);
            } catch (error) {
                console.error("Une erreur est survenue :", error);
            }
        };

        fetchResults();
    }, []);

    const isProductInList = product.filter((item) => item.product_name.toString().toLowerCase().includes(inputValue));
    console.log(isProductInList)

    return (
        <div className="searchbar-container">
            <input className="search-input" type="text" placeholder="Rechercher..." onChange={handleInputChange} value={inputValue} maxLength="50" />
            {showSearchBarOverlay && inputValue !== '' && isProductInList.length > 0 && (
                <div ref={searchbarOverlayRef} className="searchbar-overlay">
                    <p>Résultats :</p>
                    <ul>
                        {isProductInList.map((product) => (
                            <li key={product.id_product}>
                                {product.product_name}
                                <Link to={`/products/${product.id_product}`}><img className="searchbar-img" src={product.product_image} alt="" /></Link>
                            </li>
                        ))}
                    </ul>
                </div>

            )}




            <button className="searchbar-closing-btn" onClick={closeSearchBar}>
                X
            </button>
        </div>
    );
}
