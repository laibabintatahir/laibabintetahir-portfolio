import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            <div className="nav__menu">
              <ul className="nav__list grid"></ul>
              
            </div>
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
