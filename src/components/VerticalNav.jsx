import React from "react";
import yogaIcon from "../assets/img/yoga-icon.png";
import swimIcon from "../assets/img/swim-icon.png";
import bikeIcon from "../assets/img/bike-icon.png";
import muscuIcon from "../assets/img/muscu-icon.png";

const VerticalNav = () => {
  return (
    <div className="vertical-nav">
      <div className="icons">
        <img src={yogaIcon} alt="yoga icon" />
        <img src={swimIcon} alt="swim icon" />
        <img src={bikeIcon} alt="bike icon" />
        <img src={muscuIcon} alt="muscu icon" />
      </div>
      <span>Copiryght, SportSee 2020</span>
    </div>
  );
};

export default VerticalNav;
