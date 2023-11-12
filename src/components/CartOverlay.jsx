import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';
import { Link } from 'react-router-dom'


export default function CartOverlay() {
    const cartContext = useContext(CartContext);
    const { cart, calculateTotal } = cartContext;

    const totalCartAmount = calculateTotal();
    return (
        <div className="overlayCart">
            {Object.keys(cart).length === 0 ? (
                <p>Votre panier est vide</p>
            ) : (
                <>
                    <p>Votre panier:</p>
                    {Object.keys(cart).map((productId) => {
                        const item = cart[productId];
                        const product = item.product;
                        const quantity = item.quantity;
                        return (
                            <div className="item-container" key={productId}>
                                <img className="item-thumb" src={product.product_image} alt="itm-picture" />
                                <div className="item-desc">
                                    <div className="item-title">{product.product_name}</div>
                                    <div className="item-qty">quantité: {quantity}</div>
                                    <div className="item-total">prix: {product.product_price * quantity}€</div>
                                </div>
                            </div>
                        );
                    })}
                    <div className="total">Total: {totalCartAmount}€</div>
                    <Link to="/cart">
                        <button className="validate-btn">Voir mon panier</button>
                    </Link>
                </>
            )}
        </div>
    );


}
