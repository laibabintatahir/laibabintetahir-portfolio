import React from "react";
import "./About.css";
import AboutImg from "../../assets/laiba.png";
import CV from "../../assets/CV.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me </h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description">
          I specialize in crafting high-quality web and mobile applications. From designing to development, I provide a complete solution for your business. I have a strong passion for developing web and mobile applications.
          </p>
          <a download="" href={CV} className="button button--flex">
            Download CV <i class="uil uil-import"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
