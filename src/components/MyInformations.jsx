import React, { useContext, useState } from "react";
import "../styles/myInformations.scss";
import { UserContext } from "./UserContext";
import { BASEURL } from '../App'

export default function MyInformations({ layout }) {
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

      const response = await fetch(`${BASEURL}/api/user/${userId}`, {
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
    <form onSubmit={updateInfos} className="my-infos-form" >
      <div className={`my-infos-form-columns ${layout === 'my-infos' ? 'my-account' : 'payment'}`}>
        <div className="my-infos-column">
          <div className="my-infos-inputs">
            <label for="">Nom</label>
            <input
              type="text"
              id=""
              name="nom"
              onChange={(e) => setFormUserLastname(e.target.value)}
              value={formUserLastname}
            />
          </div>
          <div className="my-infos-inputs">
            <label for="">Prénom</label>
            <input
              type="text"
              id=""
              name="prénom"
              onChange={(e) => setFormUserFirstname(e.target.value)}
              value={formUserFirstname}
            />
          </div>
          <div className="my-infos-inputs">
            <label for="">Email</label>
            <input
              type="text"
              id=""
              name="email"
              onChange={(e) => setFormEmail(e.target.value)}
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
              onChange={(e) => setFormFirstPassword(e.target.value)}
              value={formFirstPassword}
            />
          </div>
          <div className="my-infos-inputs">
            <label for="">Nouveau mot de passe</label>
            <input
              type="password"
              id=""
              name="new password"
              onChange={(e) => setFormSecondPassword(e.target.value)}
              value={formSecondPassword}
            />
          </div>
          <div className="my-infos-inputs">
            {" "}
            <label for="">Date de naissance</label>
            <input type="date" id="" name="birthdate" value="" />
          </div>

        </div>

      </div>
      <div className={`my-infos-newsletter-checkbox ${layout === 'my-infos' ? 'my-account' : 'payment'}`}>
        <input type="checkbox" id="" name="newsletter" value="" />
        <label for="">Recevoir notre newsletter</label>
      </div>
      <button type="submit" className={`my-infos-form-btn ${layout === 'my-infos' ? 'my-account' : 'payment'}`}>
        Sauvegarder
      </button>
    </form>
  );
}
