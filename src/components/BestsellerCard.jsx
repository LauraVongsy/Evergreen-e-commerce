import React from "react";
import { Link } from "react-router-dom";
import "../styles/bestsellers.scss";

const BestSellerCard = ({ bestseller, addToCart, addedToCartMessages, updateAddedToCartMessages }) => {


    return (
        <Link to={`/products/${bestseller.product.id_product}`} className="bestsellers-card">
            <img className="bestsellers-img" src={bestseller.product.product_image} alt="" />
            <div className="bestsellers-card-desc">
                <h2 className="card-title">{bestseller.product.product_name}</h2>
                <p className="card-desc">{bestseller.product.product_short_desc}</p>
            </div>
            <div className="rates-and-price">
                <p>Prix:</p>
                <span className="bestsellers-price">{bestseller.product.product_price}€</span>
            </div>
            <div className="div-btn">
                <button
                    className={`card-button ${addedToCartMessages[bestseller.product.id_product]
                        ? "added-animation"
                        : ""
                        }`}
                    onClick={(e) => {
                        e.preventDefault();
                        addToCart(bestseller.product);
                        updateAddedToCartMessages(bestseller.product.id_product, "Ajouté");
                        setTimeout(() => {
                            updateAddedToCartMessages(bestseller.product.id_product, "");
                        }, 2000);
                    }}
                >
                    {addedToCartMessages[bestseller.product.id_product] || "Ajouter au panier"}
                </button>
            </div>
        </Link>
    );
};

export default BestSellerCard;
