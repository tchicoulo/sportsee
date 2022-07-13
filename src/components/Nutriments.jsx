import React from "react";

const Nutriments = (props) => {
  return (
    <div className="nutriments">
      <div className="box-icon">
        <div className="background" style={props.style}></div>
        <img src={props.img} alt={props.img} />
      </div>
      <div className="values">
        <h4>
          {props.count.toLocaleString("en-US")}
          {props.unit}
        </h4>
        <span>{props.nutriment}</span>
      </div>
    </div>
  );
};

export default Nutriments;
