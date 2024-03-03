import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../components/CartContext";
import BestSellerCard from "./BestsellerCard";

import "../styles/bestsellers.scss";

export default function BestSellers() {
  const cartContext = useContext(CartContext);
  const addToCart = cartContext.addToCart;
  const [isLoading, setIsLoading] = useState(true);
  const [bestsellers, setBestsellers] = useState([]);
  const [addedToCartMessages, setAddedToCartMessages] = useState({});

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/bestsellers`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });


        const data = await response.json();

        setBestsellers(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Une erreur est survenue :", error);
      }
    };

    fetchResults();
  }, []);
  const updateAddedToCartMessages = (productId, message) => {
    setAddedToCartMessages({
      ...addedToCartMessages,
      [productId]: message,
    });
  };

  return !isLoading ? (
    <div className="bestsellers-container">
      <div className="bestsellers-header">
        <h1 className="bestsellers-title">Nos meilleures ventes</h1>
        <span className="bestsellers-subtitle">
          Découvrez les favoris de nos clients et craquez à votre tour...
        </span>
      </div>
      <div className="bestsellers-cards-container">
        {bestsellers
          ? bestsellers.map((bestseller, index) => (
            <BestSellerCard
              key={index}
              bestseller={bestseller}
              addToCart={addToCart}
              addedToCartMessages={addedToCartMessages}
              updateAddedToCartMessages={updateAddedToCartMessages}
            />
          ))
          : "loading"}
      </div>
      <hr className="separator" />
    </div>
  ) : (
    "loading"
  );
}
