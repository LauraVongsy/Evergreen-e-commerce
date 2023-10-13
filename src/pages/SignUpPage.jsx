import React from "react";
import { Link } from "react-router-dom";
import "../styles/signupPage.scss";

export default function SignUpPage() {
  return (
    <>
      <div className="sign-up-page">
        <Link className="logo" to="/"><img src="/assets/logos/desktop-logo.png" alt="logo" /></Link>

        <section className="sign-up-form">
          <div className="form-container">
            <h1 className="form-title">Créez votre compte</h1>
            <p className="form-subtitle">
              faites partie de nos clients et profitez de réductions tout au
              long de l’année...
            </p>
            <form action="" className="form">
              <label className="form-label" htmlFor="">
                Nom
              </label>
              <input className="form-input" type="text" />
              <label className="form-label" htmlFor="">
                Prénom
              </label>
              <input className="form-input" type="text" />
              <label className="form-label" htmlFor="">
                Email
              </label>
              <input className="form-input" type="email" />
              <label className="form-label" htmlFor="">
                Mot de passe
              </label>
              <input className="form-input" type="password" />
              <label className="form-label" htmlFor="">
                Vérification mot de passe
              </label>
              <input className="form-input" type="password" />
              <button className="sign-up-btn">M'inscrire</button>
            </form>
            <button className="google-signup">
              <img src="/assets/socials/google.png" alt="icone google" />
              Se connecter avec GOOGLE
            </button>
            <button className="insta-signup">
              <img src="/assets/socials/instagram.png" alt="icone instagram" />
              Se connecter avec Instagram
            </button>
          </div>
        </section>
        <section className="sign-up-img">
          <img
            src="/assets/img/signup-pic.png"
            alt="photo décoration plantes"
          />
        </section>
      </div>
    </>
  );
}
