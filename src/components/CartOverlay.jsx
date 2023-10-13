import React from 'react'

export default function CartOverlay({ closeCart }) {
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

            <button className="validate-btn">Valider le panier</button>
            <button
                className="closing-btn"
                onClick={closeCart}
            >
                X
            </button>
        </div>
    )
}
