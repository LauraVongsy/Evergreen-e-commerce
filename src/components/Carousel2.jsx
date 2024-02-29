import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.scss";
import CarouselCard from "./CarouselCard";

import React from 'react';
import Slider from "react-slick";

export default function Carousel() {

    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },

        ]
    };

    return (
        <div className="carousel-section">
            <h1 className="carousel-title">Le blog</h1>
            <p className="carousel-subtitle">
                Apprenez à vous occuper de vos plantes, rencontrez nos artisans
                partenaires...
            </p>
            <div className="slider-container">
                <button type="button" data-role="none" className="slick-arrow slick-prev" > Previous</button>
                <Slider {...settings}>
                    <CarouselCard imagePath="/assets/articles/picCard1.png"
                        title="Quelle plante est faite pour vous?" />
                    <CarouselCard imagePath="/assets/articles/picCard2.png"
                        title="Notre séléction d’accessoires de jardinage d’intérieur..." />
                    <CarouselCard imagePath="/assets/articles/picCard3.png"
                        title="Comment prendre soin de vos plantes..." />
                    <CarouselCard imagePath="/assets/articles/picCard4.png"
                        title="Qui sont les artisans que nous soutenons..." />
                    <CarouselCard imagePath="/assets/articles/picCard5.png"
                        title="Quels sont nos engagements pour la planète?" />
                    <CarouselCard imagePath="/assets/articles/picCard6.png"
                        title="Découvrez pourquoi vos plantes vous font du bien..." />
                </Slider>
                <button type="button" data-role="none" className="slick-arrow slick-next" > Next</button>
            </div>
            <hr className="separator" />
        </div>
    )
}
