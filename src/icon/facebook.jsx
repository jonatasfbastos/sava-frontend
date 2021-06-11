import React from "react";
import PropTypes from "prop-types";

const defaultStyles = { display: "inline-block", verticalAlign: "middle" };

const Facebook = ({ size, color, icon, className, style, viewBox }) => {
  const styles = { ...defaultStyles, ...style };
  return (

    <svg
        className={className} 
        style={style}
        viewBox={viewBox}
        width={`${size}px`}
        height={`${size}px`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        >
        <path 
            d="M11.5001 0.0478821C5.14882 0.0478821 0 5.1967 0 11.548C0 17.2443 4.146 21.9618 9.58209 22.8753V13.9472H6.80793V10.7343H9.58209V8.36526C9.58209 5.61649 11.261 4.11857 13.7134 4.11857C14.888 4.11857 15.8974 4.20609 16.1904 4.24464V7.11784L14.4895 7.11866C13.156 7.11866 12.8989 7.75218 12.8989 8.68216V10.7327H16.0807L15.6657 13.9455H12.8989V22.9521C18.5888 22.2596 23 17.4219 23 11.5447C23 5.1967 17.8512 0.0478821 11.5001 0.0478821Z" 
            fill={color}
        />
    </svg>
  );
};

Facebook.defaultProps = {
  size: 32,
  color: "#000000",
  viewBox: "0 0 24 24",
  style: {},
  className: "",
};

Facebook.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  style: PropTypes.shape(PropTypes.object),
  className: PropTypes.string,
};

export default Facebook;

