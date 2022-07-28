import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h1>Erreur</h1>
      <h2>404</h2>
      <NavLink to="/user/12">
        <h3>Retourner à la page d'accueil</h3>
      </NavLink>
    </div>
  );
};

export default Error;
