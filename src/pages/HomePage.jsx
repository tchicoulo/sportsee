import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Te revoilà</h1>
      <h2>Tu progresses, continue comme ça !</h2>
      <NavLink to="/user/12">
        <h3>Consulter mon profil</h3>
      </NavLink>
    </div>
  );
};

export default HomePage;
