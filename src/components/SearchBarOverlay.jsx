import React from 'react';
import { Link } from 'react-router-dom'
import "../styles/searchBarOverlay.scss"

export default function SearchBarOverlay(props) {
    const { matchingProducts } = props;


    return (
        <div className="searchbar-overlay">
            <p>Résultats :</p>
            <ul>
                {matchingProducts.map((product) => (
                    <li key={product.id_product}>
                        {product.product_name}
                        <Link to={`/products/${product.id_product}`}><img className="searchbar-img" src={product.product_image} alt="" /></Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
