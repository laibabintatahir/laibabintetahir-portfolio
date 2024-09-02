import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h2 className="footer__title">Laiba Binta tahir</h2>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testomianals" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://instagram.com/laibalifelogs"
            className="footer__social-icon"
            target="_blank"
          >
            <i class="uil uil-instagram"></i>
          </a>

          <a
            href="https://twitter.com/laibabintatahir"
            className="footer__social-icon"
            target="_blank"
          >
            <i class="uil uil-twitter"></i>
          </a>

          <a
            href="https://laibabintatahir@gmail.com/"
            className="footer__social-icon"
            target="_blank"
          >
            <i class="uil uil-envelope"></i>{" "}
          </a>

          <a
            href="https://github.com/laibabintatahir"
            className="footer__social-icon"
            target="_blank"
          >
            <i class="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; laibabintatahir.All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
