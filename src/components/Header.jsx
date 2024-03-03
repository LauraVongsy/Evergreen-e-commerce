import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import NavbarMobile from './NavbarMobile';
import "../styles/header.scss"

export default function Header() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
        };

        //écouteur d'événement pour redéfinir isMobile lors du redimensionnement de la fenêtre
        window.addEventListener('resize', handleResize);

        // Appelle handleResize lors du premier rendu pour définir l'état initial
        handleResize();

        // Nettoie l'écouteur d'événements lors du démontage du composant
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='header-container'>
            <div className='header-left-part'>
                <Link className='header-logo' to={"/"}><img src='/assets/logos/desktop-logo.png' alt='logo evergreen' /></Link>
                <Link className="navbar-blog" to="/blog">
                    <span>Le Blog</span>
                </Link>
            </div>
            {isMobile ? <NavbarMobile /> : <Navbar />}
        </div>
    )
}
