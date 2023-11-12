import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../components/CartContext";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/productPage.scss";
import { useParams } from "react-router-dom";

export default function ProductPage() {
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const addQuantity = () => {
        setQuantity(quantity + 1);
    };
    const removeQuantity = () => {
        if (quantity >= 1) {
            setQuantity(quantity - 1);
        }
    };

    const { cart, addToCartProductPage } = useContext(CartContext);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await fetch(
                    `http://localhost:5000/api/products/${id}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                console.log(response);
                const data = await response.json();
                console.log(data);
                setProduct(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Une erreur est survenue :", error);
            }
        };

        fetchResults();
    }, [id]);
    console.log(cart);

    return !isLoading ? (
        <div className="page">
            <Banner />
            <Header />
            <div className="product-page">
                <div className="product-picture">
                    <img src={product.product_image} alt="" className="product-img" />
                </div>
                <div className="product-description">
                    <h1 className="product-title">{product.product_name}</h1>
                    <div className="product-params">
                        <div className="plant-needs">
                            <p>Besoins:</p>
                            <img src="/assets/icons/Water.png" alt="" />
                            <img src="/assets/icons/Sun.png" alt="" />
                            <img src="/assets/icons/Heat.png" alt="" />
                        </div>
                        <div className="plant-level">
                            <p>Niveau:</p>
                            <p>{product.id_level}</p>
                        </div>
                    </div>
                    <p className="product-text">{product.product_description}</p>
                    <div className="product-adding">
                        <p className="product-quantity">quantité:</p>
                        <div className="qty-buttons">
                            <button className="product-qty-btn" onClick={removeQuantity}>
                                -
                            </button>
                            <input type="text" className="product-qty" value={quantity} />
                            <button className="product-qty-btn" onClick={addQuantity}>
                                +
                            </button>
                        </div>
                        <div className="price-div">
                            <p className="price-placeholder">Prix:</p>
                            <p className="product-price">{product.product_price}€</p>
                        </div>

                        <button
                            className="adding-btn"
                            onClick={() => addToCartProductPage(product, quantity)}
                        >
                            <img src="/assets/icons/Buy.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    ) : (
        "loading"
    );
}
