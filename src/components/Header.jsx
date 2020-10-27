import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";

import "../assets/css/components/Header.scss";
import logo from "../assets/static/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
    const nav = document.getElementById("main-menu");
    nav.classList.toggle("visible-menu");
  };

  return (
    <header className="header">
      <div className="logo">
        <img className="logo__image" src={logo} alt="Logo" />
      </div>
      <nav className="main-menu" id="main-menu">
        <ul className="nav">
          <li className="nav__item">
            <a className="" href="#">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a className="" href="#">
              About
            </a>
          </li>
          <li className="nav__item">
            <a className="" href="#">
              Contact
            </a>
          </li>
          <li className="nav__item">
            <a className="" href="#">
              Blog
            </a>
          </li>
          <li className="nav__item">
            <a className="" href="#">
              Careers
            </a>
          </li>
        </ul>
      </nav>

      <div className="header-button">
        <button className="btn btn--primary">Request invite</button>
      </div>

      <HamburgerMenu
        className="hamburger-menu"
        isOpen={isOpen}
        menuClicked={() => openMenu()}
        width={30}
        height={23}
      ></HamburgerMenu>
    </header>
  );
};

export default Header;
