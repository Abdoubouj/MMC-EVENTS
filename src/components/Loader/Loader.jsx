import React from "react";
import "./Loader.scss"
const Loader = () => {
  return (
    <svg className="loader" viewBox="25 25 50 50">
      <circle className="circle-loader" r="20" cy="50" cx="50"></circle>
    </svg>
  );
};

export default Loader;
