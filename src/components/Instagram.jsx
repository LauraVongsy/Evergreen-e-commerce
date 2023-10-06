import React from "react";
import "../styles/instagram.scss";

export default function Instagram() {
  return (
    <div className="insta-container">
      <h1 className="insta-title">Suivez-nous sur Instagram</h1>
      <div className="insta-grid">
        <img className="insta-img" src="/assets/insta/img1.png" alt="" />

        <img className="insta-img" src="/assets/insta/img2.png" alt="" />

        <img className="insta-img" src="/assets/insta/img3.png" alt="" />

        <img className="insta-img" src="/assets/insta/img4.png" alt="" />

        <img className="insta-img" src="/assets/insta/img5.png" alt="" />

        <img className="insta-img" src="/assets/insta/img6.png" alt="" />
      </div>
    </div>
  );
}
