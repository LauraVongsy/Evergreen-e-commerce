import React, { useContext, useState } from "react";
import "../styles/myInformations.scss";
import { UserContext } from "./UserContext";

export default function MyInformations() {
  const userContext = useContext(UserContext);
  const { userId, email, userFirstname, userLastname } = userContext;

  const [formEmail, setFormEmail] = useState(email);
  const [formFirstPassword, setFormFirstPassword] = useState();
  const [formSecondPassword, setFormSecondPassword] = useState();
  const [formUserFirstname, setFormUserFirstname] = useState(userFirstname);
  const [formUserLastname, setFormUserLastname] = useState(userLastname);

  const updateInfos = async () => {
    try {
      const data = {
        first_name: formUserFirstname,
        last_name: formUserLastname,
        email: formEmail,
        password: formSecondPassword,
      };

      const response = await fetch(`http://localhost:5000/api/user/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("les données ont bien été envoyées!");
      }
      console.log("voici les datas", data);
    } catch (error) {
      console.error("Une erreur est survenue :", error);
    }
  };
  return (
    <form onSubmit={() => updateInfos} className="my-infos-form">
      <div className="my-infos-form-columns">
        <div className="my-infos-column">
          <div className="my-infos-gender">
            <p>Titre</p>
            <input type="radio" id="" name="Mr" value="Mr" />
            <label for="">Mr</label>
            <input type="radio" id="" name="Mrs" value="Mrs" checked />
            <label for="">Mrs</label>
          </div>
          <div className="my-infos-inputs">
            <label for="">Nom</label>
            <input
              type="text"
              id=""
              name="nom"
              onChange={(e) => setFormUserLastname(e)}
              value={formUserLastname}
            />
          </div>
          <div className="my-infos-inputs">
            <label for="">Prénom</label>
            <input
              type="text"
              id=""
              name="prénom"
              onChange={(e) => setFormUserFirstname(e)}
              value={formUserFirstname}
            />
          </div>
          <div className="my-infos-inputs">
            <label for="">Email</label>
            <input
              type="text"
              id=""
              name="email"
              onChange={(e) => setFormEmail(e)}
              value={formEmail}
            />
          </div>
        </div>
        <div className="my-infos-column">
          {" "}
          <div className="my-infos-inputs">
            <label for="">Mot de passe</label>
            <input
              type="password"
              id=""
              name="password"
              onChange={(e) => setFormFirstPassword(e)}
              value={formFirstPassword}
            />
          </div>
          <div className="my-infos-inputs">
            <label for="">Nouveau mot de passe</label>
            <input
              type="password"
              id=""
              name="new password"
              onChange={(e) => setFormSecondPassword(e)}
              value={formSecondPassword}
            />
          </div>
          <div className="my-infos-inputs">
            {" "}
            <label for="">Date de naissance</label>
            <input type="date" id="" name="birthdate" value="" />
          </div>
          <div className="my-infos-newsletter-checkbox">
            <label for="">Recevoir notre newsletter</label>
            <input type="checkbox" id="" name="newsletter" value="" />
          </div>
        </div>
      </div>

      <button onClick={onsubmit} className="my-infos-form-btn">
        Sauvegarder
      </button>
    </form>
  );
}
