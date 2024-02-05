import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.scss";


import React, { useRef } from 'react';
import Slider from "react-slick";

export default function Carousel2() {

    var settings = {
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
                    <div className="carousel-card">
                        <img className="carousel-img" src="/assets/articles/picCard1.png" />
                        <div className="carousel-card-desc">
                            <h4>Quelle plante est faite pour vous?</h4>
                        </div>
                    </div>
                    <div className="carousel-card">
                        <img className="carousel-img" src="/assets/articles/picCard2.png" />
                        <div className="carousel-card-desc">
                            <h4>Notre séléction d’accessoires de jardinage d’intérieur...</h4>
                        </div>
                    </div>
                    <div className="carousel-card">
                        <img className="carousel-img" src="/assets/articles/picCard3.png" />
                        <div className="carousel-card-desc">
                            <h4>Comment prendre soin de vos plantes...</h4>
                        </div>
                    </div>
                    <div className="carousel-card">
                        <img className="carousel-img" src="/assets/articles/picCard4.png" />
                        <div className="carousel-card-desc">
                            <h4>Qui sont les artisans que nous soutenons...</h4>
                        </div>
                    </div>
                    <div className="carousel-card">
                        <img className="carousel-img" src="/assets/articles/picCard5.png" />
                        <div className="carousel-card-desc">
                            <h4>Quels sont nos engagements pour la planète?</h4>
                        </div>
                    </div>
                    <div className="carousel-card">
                        <img className="carousel-img" src="/assets/articles/picCard6.png" />
                        <div className="carousel-card-desc">
                            <h4>Découvrez pourquoi vos plantes vous font du bien...</h4>
                        </div>
                    </div>
                </Slider>
                <button type="button" data-role="none" className="slick-arrow slick-next" > Next</button>
            </div>
            <hr className="separator" />
        </div>
    )
}
