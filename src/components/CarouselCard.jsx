// CarouselCard.jsx
import React from 'react';

const CarouselCard = ({ imagePath, title }) => {
    return (
        <div className="carousel-card">
            <img className="carousel-img" src={imagePath} alt={title} />
            <div className="carousel-card-desc">
                <h4>{title}</h4>
            </div>
        </div>
    );
};

export default CarouselCard;
