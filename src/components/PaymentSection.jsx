import React, { useContext, useState } from 'react';
import "../styles/paymentSection.scss";
import { CartContext } from './CartContext';
import { UserContext } from './UserContext';
import MyInformations from './MyInformations';

import {
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

const options = {
    style: {
        base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
                color: '#aab7c4',
            },
        },
        invalid: {
            color: '#9e2146',
        },
    },
};

export default function PaymentSection() {
    const { totalCartAmount } = useContext(CartContext);
    const { userId, userFirstName, userLastName } = useContext(UserContext);
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }

        const response = await fetch("/.netlify/functions/create-payment-intent", {

            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ amount: totalCartAmount * 100 })
        }).then(res => res.json());

        const clientSecret = response.paymentIntent.client_secret;

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: { userFirstName, userLastName }
                }
            }
        });
        if (paymentResult.error) {
            alert(paymentResult.error);
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Votre paiement a été accepté. Vous allez être redirigé(e) vers la page d\'accueil...');
            }
        }
        console.log(paymentResult);


    };

    return (
        <form className='payment-form-container' onSubmit={handleSubmit}>
            <h1 className='payment-form-title'>Vos informations:</h1>
            <MyInformations layout={"payment"} />
            <p className='payment-form-titles'>Effectuez votre paiement:</p>
            <p className='payment-form-titles'>Par carte bancaire:</p>
            <CardElement className='card-element' options={options} />
            <button className='pay-now-btn' type="submit" disabled={!stripe || !elements}>
                Payer: {totalCartAmount} €
            </button>
            {/* Show error message to your customers */}
            {errorMessage && <div>{errorMessage}</div>}
        </form>
    );
}
