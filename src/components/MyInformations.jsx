import React from "react";
import "../styles/myInformations.scss";

export default function MyInformations() {
  return (
    <form className="my-infos-form">
      <div className="my-infos-gender">
        <p>Titre</p>
        <input type="radio" id="" name="Mr" value="Mr" />
        <label for="">Mr</label>
        <input type="radio" id="" name="Mrs" value="Mrs" checked />
        <label for="">Mrs</label>
      </div>
      <div className="my-infos-inputs">
        <label for="">Nom</label>
        <input type="text" id="" name="nom" value="" />
      </div>
      <div className="my-infos-inputs">
        <label for="">Prénom</label>
        <input type="text" id="" name="prénom" value="" />
      </div>
      <div className="my-infos-inputs">
        <label for="">Email</label>
        <input type="text" id="" name="email" value="" />
      </div>
      <div className="my-infos-inputs">
        <label for="">Mot de passe</label>
        <input type="password" id="" name="password" value="" />
      </div>
      <div className="my-infos-inputs">
        <label for="">Nouveau mot de passe</label>
        <input type="password" id="" name="new password" value="" />
      </div>
      <div className="my-infos-inputs">
        {" "}
        <label for="">Date de naissance</label>
        <input type="date" id="" name="birthdate" value="" />
      </div>
      <div className="my-infos-inputs">
        <label for="">Recevoir notre newsletter</label>
        <input type="checkbox" id="" name="newsletter" value="" />
      </div>

      <button>Sauvegarder</button>
    </form>
  );
}
