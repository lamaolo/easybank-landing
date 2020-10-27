import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";

import "../assets/css/components/Header.scss";
import logo from "../assets/static/logo.svg";

const ResponsiveHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img className="logo__image" src={logo} alt="Logo" />
      </div>
    </header>
  );
};

export default ResponsiveHeader;
