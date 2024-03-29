import React, { useContext, useState } from "react";
import { CartContext } from "../components/CartContext";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PaymentSection from "../components/PaymentSection";

import "../styles/cartPage.scss";

export default function CartPage() {
  const cartContext = useContext(CartContext);
  const {
    cart,
    decreaseQuantity,
    increaseQuantity,
    removeProduct,
    totalCartAmount,
    numberOfItems,
  } = cartContext;
  const [showStripe, setShowStripe] = useState(false);

  const scrollToPaymentSection = () => {
    const paymentSection = document.getElementById('stripe-container');
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="cartPage">
      <Banner />
      <Header />
      <h1 className="cart-page-title">Votre panier:</h1>
      <div className="cart-container">
        <section className="cart-products">
          {Object.keys(cart).map((productId) => {
            const item = cart[productId];
            const product = item.product;
            const quantity = item.quantity;
            return (
              <div className="cart-product" key={productId}>
                <div className="cart-product-column">
                  <img
                    className="cart-product-img"
                    src={product.product_image}
                    alt={product.product_name}
                  />
                  <div className="cart-prod-desc">
                    <p>{product.product_name}</p>
                  </div>
                </div>
                <div className="cart-product-column">
                  {product.product_price}€
                </div>
                <div className="cart-quantity-column">
                  <button className="qty-buttons" onClick={() => decreaseQuantity(productId)}>-</button>
                  {quantity}
                  <button className="qty-buttons" onClick={() => increaseQuantity(productId)}>+</button>
                </div>
                <div className="cart-total-column">
                  <div>{product.product_price * quantity}€</div>
                  <button className="cartPage-remove-btn" onClick={() => removeProduct(productId)}>
                    supprimer
                  </button>
                </div>
              </div>
            );
          })}

        </section>

        <section className="cart-recap">
          <h1>Total panier</h1>
          <div className="numbers-articles">
            <p>
              {" "}
              {numberOfItems() === 0 ? (
                <p>Votre panier est vide.</p>
              ) : (
                <p>{numberOfItems()} article(s) </p>
              )}
            </p>
            <p>{totalCartAmount} €</p>
          </div>
          <hr />
          <div className="cart-shipping">
            <p>Livraison</p>
            <p>à partir de 5.5€</p>
          </div>
          <hr />
          <div className="cart-recap-total">
            <p>Total TTC</p>
            <p>{totalCartAmount} €</p>
          </div>
          <hr />
          <div className="promo-code">
            <label htmlFor="">Vous avez un code?</label>
            <input type="text" placeholder="votre code ici..." maxLength="50" />
          </div>
          <button className="cart-order" onClick={() => { setShowStripe(true); scrollToPaymentSection() }}>Commander</button>

        </section>


      </div>
      {showStripe ? <div id="stripe-container"> <PaymentSection /> </div> : null}
      <Footer />
    </div>

  );
}
