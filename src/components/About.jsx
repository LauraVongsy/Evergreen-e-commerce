import React from "react";
import "../styles/about.scss";

export default function About() {
  return (
    <>
      <div className="about-section">
        <h1 className="about-title">Qui sommes-nous?</h1>
        <div className="about-container">
          <img
            className="about-img"
            src="/assets/img/about.png"
            alt="pots de fleurs"
          />
          <div className="about-text-container">
            <h2 className="title-text">A propos de nous:</h2>
            <p className="about-text">
              <br />
              <br />
              Chez EverGreen, nous sommes passionnés par les plantes d'intérieur
              cultivées de façon responsable et locale. <br />
              Nous privilégions les circuits courts, l'artisanat responsable et
              l'éco-responsabilité.
              <br /> En tant qu'entreprise labellisée "Happy at Work", nous
              sommes inclusifs et bienveillants envers nos collaborateurs.{" "}
              <br />
              Notre objectif est d'aider les gens à renouer avec la nature en
              leur offrant des plantes vertes d'intérieur de haute qualité.
              <br /> Rejoignez-nous pour créer un environnement verdoyant et
              sain chez vous.
              <br /> Découvrez notre sélection dès aujourd'hui et laissez la
              magie de la nature entrer dans votre vie.
            </p>
          </div>
        </div>
      </div>
      <hr className="separator" />
    </>
  );
}
