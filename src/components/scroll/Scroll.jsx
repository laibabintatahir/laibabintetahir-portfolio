import React from "react";
import "./Scroll.css";
const Scroll = () => {
  return (
    // if scroll is higher than 560 viewport height 
  //  add tthe show scroll class to a tag 
  //with the scroll top class
    <a href="" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default Scroll;
