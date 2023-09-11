import React from 'react'
import ShopButton from './ShopButton'
import Navbar from './Navbar'
import "../styles/header.scss"

export default function Header() {
    return (
        <div className='header-container'>
            <ShopButton />
            <img className='header-logo' src='/assets/logos/desktop-logo.png' alt='logo evergreen' />
            <Navbar />
        </div>
    )
}
