import React from 'react'
import "../styles/navbar.scss"

export default function Navbar() {
    return (
        <div className='navbar-container'>
            <p className='navbar-blog'>Le Blog</p>
            <img className="navbar-icon" src="/assets/icons/User.png" alt="user icon" />
            <button className='subscribe-button'>M'inscrire</button>
            <img className="navbar-icon" src="/assets/icons/Cart.png" alt="cart icon" />
        </div>
    )
}
