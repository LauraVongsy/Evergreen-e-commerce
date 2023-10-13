import React from 'react'
import { Link } from 'react-router-dom';
import ShopButton from './ShopButton'
import Navbar from './Navbar'
import "../styles/header.scss"

export default function Header() {
    return (
        <div className='header-container'>
            <ShopButton />
            <Link className='header-logo' to={"/"}><img src='/assets/logos/desktop-logo.png' alt='logo evergreen' /></Link>
            <Navbar />
        </div>
    )
}
