import React from "react";
import "../styles/footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-contacts">
        <p>Nous contacter</p>
        <p>
          Service client: <br /> 0800 306 30 9
        </p>
        <p>
          Par mail: <br /> contact@evergreen.com
        </p>
      </div>
      <div className="socials">
        <p>Nous trouver sur les réseaux sociaux:</p>
        <div className="socials-icons">
          <a href="">
            <img
              className="media-icons"
              src="/assets/socials/facebook.png"
              alt=""
            />
          </a>
          <a href="">
            <img
              className="media-icons"
              src="/assets/socials/instagram.png"
              alt=""
            />
          </a>
          <a href="">
            <img
              className="media-icons"
              src="/assets/socials/pinterest.png"
              alt=""
            />
          </a>
          <a href="">
            <img
              className="media-icons"
              src="/assets/socials/twitter.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="cgu">
        <a href="">
          <p>Mentions légales</p>
        </a>
        <a href="">
          <p>CGU</p>
        </a>
      </div>
    </div>
  );
}
