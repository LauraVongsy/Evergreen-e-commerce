import React from 'react'
import "../styles/banner.scss"

export default function Banner() {
  return (
    <div className='banner'>
      <div className='banner-text-container'>
        <img className='banner-icon' src="/assets/icons/Leaf.png" alt="mini leaf icon" />
        <p className='banner-text'>-10% sur votre 1ère commande avec le code FIRSTORDER</p>
        <img className='banner-icon' src="/assets/icons/Orchid.png" alt="mini orchid icon" />
      </div>

    </div>
  )
}
