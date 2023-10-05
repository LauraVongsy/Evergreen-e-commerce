import React from 'react'
import Rates from './Rates'
import '../styles/bestsellers.scss'

export default function BestSellers() {
    return (
        <div className='bestsellers-container'>
            <div className='bestsellers-header'>
                <h1 className='bestsellers-title'>Nos meilleures ventes</h1>
                <span className='bestsellers-subtitle'>Découvrez les favoris de nos clients et craquez à votre tour...</span>
            </div>
            <div className='bestsellers-cards-container'>
                <div className='bestsellers-card'>
                    <img className='bestsellers-img' src="/assets/bestsellers-img/monstera.png" alt="" />
                    <div className='bestsellers-card-desc'>
                        <h2 className='card-title'>titre article</h2>
                        <p className='card-desc'>Dans cet exemple, le texte ne reviendra pas à la ligne, sera masqué s'il dépasse la largeur spécifiée (200 pixels dans cet exemple), et affichera "..." s'il est tronqué.</p>
                    </div>
                    <div className='rates-and-price'>
                        <Rates />
                        <span className='bestsellers-price'>25€</span>
                    </div>
                    <div className='div-btn'>
                        <button className='card-button'>Ajouter au panier</button>
                    </div>                </div>
                <div className='bestsellers-card'>
                    <img className='bestsellers-img' src="/assets/bestsellers-img/ficus-elastica-white.png" alt="" />
                    <div className='bestsellers-card-desc'>
                        <h2 className='card-title'>titre article</h2>
                        <p className='card-desc'>description, blablablablaalallblablalalblablablalabalbalblalababalbalba</p>
                    </div>
                    <div className='rates-and-price'>
                        <Rates className='rates' />
                        <span className='bestsellers-price'>25€</span>
                    </div>
                    <div className='div-btn'>
                        <button className='card-button'>Ajouter au panier</button>
                    </div>                </div>
                <div className='bestsellers-card'>
                    <img className='bestsellers-img' src="/assets/bestsellers-img/pilea.png" alt="" />
                    <div className='bestsellers-card-desc'>
                        <h2 className='card-title'>titre article</h2>
                        <p className='card-desc'>description, blablablablaalallblablalalblablablalabalbalblalababalbalba</p>
                    </div>
                    <div className='rates-and-price'>
                        <Rates />
                        <span className='bestsellers-price'>25€</span>
                    </div>
                    <div className='div-btn'>
                        <button className='card-button'>Ajouter au panier</button>
                    </div>                </div>
                <div className='bestsellers-card'>
                    <img className='bestsellers-img' src="/assets/bestsellers-img/suspension.png" alt="" />
                    <div className='bestsellers-card-desc'>
                        <h2 className='card-title'>titre article</h2>
                        <p className='card-desc'>description, blablablablaalallblablalalblablablalabalbalblalababalbalba</p>
                    </div>
                    <div className='rates-and-price'>
                        <Rates />
                        <span className='bestsellers-price'>25€</span>
                    </div>
                    <div className='div-btn'>
                        <button className='card-button'>Ajouter au panier</button>
                    </div>

                </div>
            </div>

            <button className='see-more-btn'>Voir plus</button>


        </div>
    )
}
