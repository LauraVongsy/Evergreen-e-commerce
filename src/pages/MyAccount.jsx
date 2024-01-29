import React, { useState } from "react";
import "../styles/myAccount.scss";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MyInformations from "../components/MyInformations";
import MyCommands from "../components/MyCommands";
import MySponsorships from "../components/MySponsorships";
import MyCoupons from "../components/MyCoupons";

export default function MyAccount() {
  const [selectedSection, setSelectedSection] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const handleSelect = (number) => {
    setSelectedSection(number);
  };

  const buttonClass = isActive
    ? "active-my-account-sections"
    : "my-account-sections";

  return (
    <div className="my-account-container">
      <Banner />
      <Header />
      <div className="my-account">
        <div className="my-account-menu">
          <button className={buttonClass} onClick={() => handleSelect(1)}>
            Mes informations
          </button>
          <button className={buttonClass} onClick={() => handleSelect(2)}>
            Mes commandes
          </button>
          <button className={buttonClass} onClick={() => handleSelect(3)}>
            Mes bons d'achats
          </button>
          <button className={buttonClass} onClick={() => handleSelect(4)}>
            Mes parainages
          </button>
        </div>
        <div className="my-account-section-content">
          {selectedSection === 1 ? (
            <MyInformations />
          ) : selectedSection === 2 ? (
            <MyCommands />
          ) : selectedSection === 3 ? (
            <MyCoupons />
          ) : selectedSection === 4 ? (
            <MySponsorships />
          ) : null}
        </div>
      </div>
      <Footer />
    </div>
  );
}
