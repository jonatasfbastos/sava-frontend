
import React from "react";
import PropTypes from "prop-types";

const defaultStyles = { display: "inline-block", verticalAlign: "middle" };

const Twitter = ({ size, color, icon, className, style, viewBox }) => {
  const styles = { ...defaultStyles, ...style };
  return (
    <svg 
        className={className}
        style={style}
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
        <path 
            d="M21.3412 0H1.65878C0.742615 0 0 0.742615 0 1.65878V21.3412C0 22.2574 0.742615 23 1.65878 23H21.3412C22.2574 23 23 22.2574 23 21.3412V1.65878C23 0.742615 22.2574 0 21.3412 0V0ZM16.7508 8.96648C16.7559 9.07966 16.7583 9.19337 16.7583 9.3076C16.7583 12.7955 14.1034 16.8176 9.24812 16.8178H9.24829H9.24812C7.75745 16.8178 6.37031 16.3809 5.20216 15.6321C5.4087 15.6565 5.61892 15.6686 5.83177 15.6686C7.06853 15.6686 8.20667 15.2468 9.11019 14.5387C7.95468 14.5173 6.98044 13.7542 6.64423 12.7053C6.80514 12.7362 6.97061 12.7531 7.1403 12.7531C7.38123 12.7531 7.61461 12.7206 7.83641 12.6601C6.62861 12.4183 5.71877 11.3508 5.71877 10.0727C5.71877 10.0607 5.71877 10.05 5.71912 10.039C6.07481 10.2367 6.48156 10.3557 6.91463 10.3691C6.20589 9.89615 5.74 9.08773 5.74 8.17192C5.74 7.68831 5.87073 7.23523 6.09744 6.84515C7.39912 8.44233 9.34445 9.49273 11.5383 9.6031C11.493 9.40973 11.4696 9.20828 11.4696 9.00122C11.4696 7.54407 12.6518 6.36189 14.1095 6.36189C14.8688 6.36189 15.5546 6.68283 16.0362 7.19592C16.6376 7.0773 17.2023 6.8576 17.7124 6.55526C17.515 7.17136 17.0966 7.68831 16.5516 8.01522C17.0856 7.95135 17.5945 7.80974 18.0674 7.59952C17.7141 8.12893 17.2661 8.59394 16.7508 8.96648Z" 
            fill={color}/>
    </svg>

  );
};

Twitter.defaultProps = {
  size: 32,
  color: "#000000",
  viewBox: "0 0 23 23",
  style: {},
  className: "",
};

Twitter.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  style: PropTypes.shape(PropTypes.object),
  className: PropTypes.string,
};

export default Twitter;
