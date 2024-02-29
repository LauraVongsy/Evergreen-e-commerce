import React from "react";
import "../styles/mySponsorships.scss";

export default function MySponsorships() {
  return (
    <div className="sponsorshops-container">
      <h1 className="sponsorships-title">Vous souhaitez être parrainé?</h1>
      <div className="sponsorships-inputs">
        <span>Entrez ici le code de votre parrain:</span>
        <input type="text" placeholder="ex:AO123FGH" maxLength="50" />
      </div>
      <div className="sponsorships-inputs">
        <span>Vous souhaitez parrainer quelqu'un?</span>
        <input type="text" value="BHG1002JK" maxLength="50" />
      </div>
    </div>
  );
}
