import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState({});

    useEffect(() => {
        // Effectuez la requête POST vers le backend à chaque modification du panier
        const updateCartOnBackend = async () => {
            try {
                await fetch('/api/cart/:id/add-to-cart', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        products: Object.keys(cart).map(id_produit => ({
                            id_produit,
                            quantity: cart[id_produit].quantity,
                        })),
                    }),
                });

                // Gérez la réponse si nécessaire
            } catch (error) {
                console.error('Erreur lors de la mise à jour du panier:', error);
            }
        };

        // Appelez la fonction pour mettre à jour le panier sur le backend
        updateCartOnBackend();
    }, [cart]);

    const addToCart = (product) => {
        setCart(prevCart => {
            const updatedCart = { ...prevCart };

            if (updatedCart[product.id_product]) {
                // Le produit existe déjà dans le panier, augmentez la quantité
                updatedCart[product.id_product].quantity += 1;
            } else {
                // Le produit n'existe pas, ajoutez-le avec une quantité de 1
                updatedCart[product.id_product] = { product, quantity: 1 };
            }

            return updatedCart;
        });
    };

    const addToCartProductPage = (product, quantity) => {
        setCart(prevCart => {
            const updatedCart = { ...prevCart };

            if (updatedCart[product.id_product]) {
                updatedCart[product.id_product].quantity += quantity;
            } else {
                updatedCart[product.id_product] = { product, quantity };
            }

            return updatedCart;
        });
    };

    const decreaseQuantity = (productId) => {
        setCart(prevCart => {
            const updatedCart = { ...prevCart };

            if (updatedCart[productId] && updatedCart[productId].quantity > 1) {
                updatedCart[productId].quantity -= 1;
            }

            return updatedCart;
        });
    };

    const increaseQuantity = (productId) => {
        setCart(prevCart => {
            const updatedCart = { ...prevCart };

            if (updatedCart[productId]) {
                updatedCart[productId].quantity += 1;
            }

            return updatedCart;
        });
    };

    const removeProduct = (productId) => {
        setCart(prevCart => {
            const updatedCart = { ...prevCart };

            if (updatedCart[productId]) {
                delete updatedCart[productId];
            }

            return updatedCart;
        });
    };

    const calculateTotal = () => {
        let total = 0;

        // Parcoure les produits dans le panier
        Object.keys(cart).forEach((productId) => {
            const product = cart[productId].product;
            const quantity = cart[productId].quantity;
            total += product.product_price * quantity;
        });

        return total.toFixed(2);
    };

    const cartData = {
        addToCart,
        cart,
        decreaseQuantity,
        increaseQuantity,
        removeProduct,
        calculateTotal,
        addToCartProductPage,
    };

    return (
        <CartContext.Provider value={cartData}>{children}</CartContext.Provider>
    );
};
