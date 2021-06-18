import React from "react";
import PropTypes from "prop-types";

const defaultStyles = { display: "inline-block", verticalAlign: "middle" };

const Lock = ({ size, color, icon, className, style, viewBox }) => {
  const styles = { ...defaultStyles, ...style };
  return (
    <svg 
      className={className} 
      fill="none"
      height="16" 
      viewBox={viewBox} 
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg" >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={3} 
        color={color}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
        />
    </svg>

  );
};

Lock.defaultProps = {
  size: 8,
  color: "#474761",
  viewBox: "0 0 32 32",
  style: {},
  className: "",
};

Lock.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  style: PropTypes.shape(PropTypes.object),
  className: PropTypes.string,
};

export default Lock;
