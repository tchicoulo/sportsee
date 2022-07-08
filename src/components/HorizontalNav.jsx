import React from "react";
import logo from "../assets/img/sportsee-logo.png";

const HorizontalNav = () => {
  return (
    <div className="horizontal-nav">
      <img src={logo} alt="logo sportsee" />
      <ul>
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglages</li>
        <li>Communauté</li>
      </ul>
    </div>
  );
};

export default HorizontalNav;
