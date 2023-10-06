import React, { useRef, useState } from "react";
import "../styles/carousel.scss";

export default function Carousel() {
  const [scrollAmount, setScrollAmount] = useState(0);
  const scrollPerClick = 330;
  const sliderRef = useRef(null);

  const sliderScrollLeft = () => {
    if (scrollAmount > 0) {
      const newScrollAmount = scrollAmount - scrollPerClick;
      setScrollAmount(newScrollAmount);
      sliderRef.current.scrollTo({
        top: 0,
        left: newScrollAmount,
        behavior: "smooth",
      });
    }
  };

  const sliderScrollRight = () => {
    if (
      scrollAmount <
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth
    ) {
      const newScrollAmount = scrollAmount + scrollPerClick;
      setScrollAmount(newScrollAmount);
      sliderRef.current.scrollTo({
        top: 0,
        left: newScrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="carousel-section">
      <h1 className="carousel-title">Le blog</h1>
      <p className="carousel-subtitle">
        Apprenez à vous occuper de vos plantes, rencontrez nos artisans
        partenaires...
      </p>

      <div className="carousel">
        <button className="previous-btn" onClick={sliderScrollLeft}>
          &lt;
        </button>
        <div className="carousel-container" ref={sliderRef}>
          <div className="carousel-card">
            <img className="carousel-img" src="/assets/articles/picCard1.png" />
            <div className="carousel-card-desc">
              <h2>Quelle plante est faite pour vous?</h2>
            </div>
          </div>
          <div className="carousel-card">
            <img className="carousel-img" src="/assets/articles/picCard2.png" />
            <div className="carousel-card-desc">
              <h2>Notre séléction d’accessoires de jardinage d’intérieur...</h2>
            </div>
          </div>
          <div className="carousel-card">
            <img className="carousel-img" src="/assets/articles/picCard3.png" />
            <div className="carousel-card-desc">
              <h2>Comment prendre soin de vos plantes...</h2>
            </div>
          </div>
          <div className="carousel-card">
            <img className="carousel-img" src="/assets/articles/picCard4.png" />
            <div className="carousel-card-desc">
              <h2>Qui sont les artisans que nous soutenons...</h2>
            </div>
          </div>
          <div className="carousel-card">
            <img className="carousel-img" src="/assets/articles/picCard5.png" />
            <div className="carousel-card-desc">
              <h2>Quels sont nos engagements pour la planète?</h2>
            </div>
          </div>
          <div className="carousel-card">
            <img className="carousel-img" src="/assets/articles/picCard6.png" />
            <div className="carousel-card-desc">
              <h2>Découvrez pourquoi vos plantes vous font du bien...</h2>
            </div>
          </div>
        </div>

        <button className="next-btn" onClick={sliderScrollRight}>
          &gt;
        </button>
      </div>

      <hr className="separator" />
    </div>
  );
}
