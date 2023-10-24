import React, { useEffect, useState } from "react";
import Rates from "./Rates";
import { Link } from "react-router-dom";
import "../styles/bestsellers.scss";

export default function BestSellers() {
  const [isLoading, setIsLoading] = useState(true);
  const [bestsellers, setBestsellers] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/bestsellers`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });

        console.log(response);
        const data = await response.json();
        console.log(data);
        setBestsellers(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Une erreur est survenue :", error);
      }
    };

    fetchResults();
  }, []);

  return (
    !isLoading ? (
      <div className="bestsellers-container">
        <div className="bestsellers-header">
          <h1 className="bestsellers-title">Nos meilleures ventes</h1>
          <span className="bestsellers-subtitle">
            Découvrez les favoris de nos clients et craquez à votre tour...
          </span>
        </div>
        <div className="bestsellers-cards-container">
          {bestsellers ? bestsellers.map((bestseller, index) => (
            <Link to={`/products/${bestseller.product.id_product}`} className="bestsellers-card" key={index}>
              <img
                className="bestsellers-img"
                src={bestseller.product.product_image}
                alt=""
              />
              <div className="bestsellers-card-desc">
                <h2 className="card-title">{bestseller.product.product_name}</h2>
                <p className="card-desc">
                  {bestseller.product.product_short_desc}
                </p>
              </div>
              <div className="rates-and-price">
                <Rates />
                <p>Prix:</p>
                <span className="bestsellers-price">{bestseller.product.product_price}€</span>
              </div>
              <div className="div-btn">
                <button className="card-button">Ajouter au panier</button>
              </div>
            </Link>
          )) : "loading"}

        </div>
        <hr className="separator" />
      </div>
    ) : (
      "loading"
    )
  );
}
