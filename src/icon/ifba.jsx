import React from "react";
import PropTypes from "prop-types";

const defaultStyles = { display: "inline-block", verticalAlign: "middle" };

const Ifba = ({ size, color, icon, className, style, viewBox }) => {
  const styles = { ...defaultStyles, ...style };
  return (
    /*
    <svg 
      className={className}
      width={`${size}px`}
      height={`${size}px`}
      viewBox={viewBox}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">
      <rect 
        width="3.5" 
        height="3.5" 
        rx="1"
        fill={color}/>
    </svg>
    
    */
    <svg 
      className={className}
      style={style} 
      width={`${size}px`} 
      height={`${size}px`} 
      viewBox={viewBox}
      fill="none"
       xmlns="http://www.w3.org/2000/svg">
    <rect width="23" height="23" rx="2" fill={color}/>
    <rect x="6" y="4" width="3.5" height="3.5" rx="1.75" fill="white"/>
    <rect x="6" y="8" width="3.5" height="3.5" rx="1" fill="white"/>
    <rect x="6" y="12" width="3.5" height="3.5" rx="1" fill="white"/>
    <rect x="6" y="16" width="3.5" height="3.5" rx="1" fill="white"/>
    <rect x="10" y="16" width="3.5" height="3.5" rx="1" fill="white"/>
    <rect x="10" y="4" width="3.5" height="3.5" rx="1" fill="white"/>
    <rect x="10" y="8" width="3.5" height="3.5" rx="1" fill="white"/>
    <rect x="10" y="12" width="3.5" height="3.5" rx="1" fill="white"/>
    <rect x="14" y="12" width="3.5" height="3.5" rx="1" fill="white"/>
    <rect x="14" y="4" width="3.5" height="3.5" rx="1" fill="white"/>
    </svg>
    

  );
};

Ifba.defaultProps = {
  size: 32,
  color: "#000000",
  viewBox: "0 0 23 23",
  style: {},
  className: "",
};

Ifba.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  style: PropTypes.shape(PropTypes.object),
  className: PropTypes.string,
};

export default Ifba;
