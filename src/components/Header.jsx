import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import "../styles/header.scss"

export default function Header() {

    return (
        <div className='header-container'>
            <div className='header-left-part'>
                <Link className='header-logo' to={"/"}><img src='/assets/logos/desktop-logo.png' alt='logo evergreen' /></Link>
                <Link className="navbar-blog" to="/blog">
                    <span>Le Blog</span>
                </Link>
            </div>
            <Navbar />
        </div>
    )
}
