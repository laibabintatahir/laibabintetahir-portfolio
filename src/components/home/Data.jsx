import React from "react";
import "./Home.css";
const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Laiba Binta Tahir
        {/* img icon*/}
      </h1>

      <h3 className="home__subtitle">Web & Mobile Developer</h3>
      <p className="home__description">
        I specialize in creating dynamic and user-friendly experiences for both
        web and mobile platforms.
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello
        <i class="uil uil-location-arrow"></i>
      </a>
    </div>
  );
};

export default Data;
