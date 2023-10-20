import React from 'react'
import { Link } from 'react-router-dom'


export default function CartOverlay() {
    return (
        <div className="overlayCart">
            <p>Votre panier:</p>
            <div className="item-container">
                <img className="item-thumb" src="" alt="itm-picture" />
                <div className="item-desc">
                    <div className="item-qty"></div>
                    <div className="item-total"></div>
                </div>
            </div>
            <div className="total">Total:</div>
            <Link to="/cart"><button className="validate-btn">Voir mon panier</button></Link>
        </div>
    )
}
