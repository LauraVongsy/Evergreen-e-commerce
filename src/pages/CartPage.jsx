import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../styles/cartPage.scss';

export default function CartPage() {
    return (
        <div className='cartPage'>
            <Banner />
            <Header />
            <h1 className='cart-page-title'>Panier</h1>
            <div className='cart-container'>

                <section className='cart-products'>
                    <div className='columns'>Produits</div>
                    <div className='columns'>Prix</div>
                    <div className='columns'>Quantité</div>
                    <div className='columns'>Total</div>
                    <div className='columns'>
                        <img className='cart-product-img' src="/assets/categories/categorytest.png" alt="" />
                        <div className='cart-prod-desc'><p>Titre de l'article</p>
                            <p>Description de l'article...</p>
                        </div>
                    </div>
                    <div className='columns'>15€</div>
                    <div className='columns'><button>-</button>1<button>+</button></div>
                    <div className='columns'><div>15€</div><button>supprimer</button></div>
                </section>
                <section className='cart-recap'>
                    <h1>Total panier</h1>
                    <div className='numbers-articles'><p>1 article</p><p>39€</p></div>
                    <hr />
                    <div className='cart-shipping'><p>Livraison</p><p>à partir de 5.5€</p></div>
                    <hr />
                    <div className='cart-recap-total'><p>Total TTC</p><p>39€</p></div>
                    <hr />
                    <div className='promo-code'><label htmlFor="">Vous avez un code?</label><input type="text" placeholder='votre code ici...' /></div>
                    <button className='cart-order'>Commander</button>
                </section>
            </div>
            <Footer />
        </div>
    )
}
