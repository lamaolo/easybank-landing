import React from "react";

import logo from "../assets/static/logo-invertido.svg";
import facebook from "../assets/static/icon-facebook.svg";
import youtube from "../assets/static/icon-youtube.svg";
import twitter from "../assets/static/icon-twitter.svg";
import pinterest from "../assets/static/icon-pinterest.svg";
import instagram from "../assets/static/icon-instagram.svg";
import "../assets/css/components/Footer.scss";

const Footer = () => (
  <div className="footer-container">
    <div className="footer">
      <div className="footer__brand">
        <div className="brand__logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="brand__socials">
          <img src={facebook} alt="facebook" />
          <img src={youtube} alt="youtube" />
          <img src={twitter} alt="twitter" />
          <img src={pinterest} alt="pinterest" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>

      <div className="footer__links">
        <a href="#">Blog</a>
        <a href="#">Contact</a>
        <a href="#">About Us</a>
      </div>

      <div className="footer__links">
        <a href="#">Careers</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Support</a>
      </div>

      <div className="footer__button">
        <button className="btn btn--primary">Request Invite</button>
        <p>© Easybank. All Rights Reserved.</p>
      </div>
    </div>
  </div>
);

export default Footer;
