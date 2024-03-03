import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/cover.scss'


export default function Cover() {
    return (
        <div className='cover-container'>
            <h1 className='cover-title'>MONSTERA DELICIOSA</h1>
            <p className='cover-p'> L'indispensable facile d'entretien</p>
            <Link to="/products/14"><button className='cover-button'>Je découvre</button></Link>
        </div>
    )
}
