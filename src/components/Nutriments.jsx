import React from "react";
import PropTypes from "prop-types";

/**
 * Function global render data for nutriments section
 * @param {*} props
 */
const Nutriments = ({ img, count, style, unit, nutriment }) => {
  return (
    <div className="nutriments">
      <div className="box-icon">
        <div className="background" style={style}></div>
        <img src={img} alt={img} />
      </div>
      <div className="values">
        <h4>
          {count.toLocaleString("en-US")}
          {unit}
        </h4>
        <span>{nutriment}</span>
      </div>
    </div>
  );
};

Nutriments.propTypes = {
  img: PropTypes.string,
  count: PropTypes.number,
  style: PropTypes.object,
  unit: PropTypes.string,
  nutriment: PropTypes.string,
};

export default Nutriments;
