import React from 'react'
import '../styles/shopButton.scss'

export default function ShopButton() {
    return (
        <div className='shop-button'>
            <img className='burger-icon' src="/assets/icons/Burger.png" alt="burger icon" />
            <p className='shop-button-title'>SHOP</p>
        </div>
    )
}
