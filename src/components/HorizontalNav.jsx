import React from "react";
import logo from "../assets/img/sportsee-logo.png";
import { NavLink } from "react-router-dom";

const HorizontalNav = () => {
  return (
    <div className="horizontal-nav">
      <img src={logo} alt="logo sportsee" />
      <ul>
        <NavLink to={"/"}>
          <li>Accueil</li>
        </NavLink>
        <li>Profil</li>
        <li>Réglages</li>
        <li>Communauté</li>
      </ul>
    </div>
  );
};

export default HorizontalNav;
