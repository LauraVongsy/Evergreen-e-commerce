import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState({});


    const addToCart = (product) => {
        if (cart[product.id_product]) {
            // Le produit existe déjà dans le panier, augmentez la quantité
            cart[product.id_product].quantity += 1;
        } else {
            // Le produit n'existe pas, ajoutez-le avec une quantité de 1
            cart[product.id_product] = { product, quantity: 1 };
        }
        setCart({ ...cart });
    };

    const decreaseQuantity = (productId) => {
        if (cart[productId] && cart[productId].quantity > 1) {
            cart[productId].quantity -= 1;
            setCart({ ...cart });
        }
    };

    const increaseQuantity = (productId) => {
        if (cart[productId]) {
            cart[productId].quantity += 1;
            setCart({ ...cart });
        }
    };

    const removeProduct = (productId) => {
        if (cart[productId]) {
            delete cart[productId];
            setCart({ ...cart });
        }
    };

    const cartData = {
        addToCart,
        cart,
        decreaseQuantity,
        increaseQuantity,
        removeProduct
    };

    return (
        <CartContext.Provider value={cartData}>{children}</CartContext.Provider>
    );
};
