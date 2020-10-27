import React from "react";

import "../assets/css/components/Hero.scss";
import heroImage from "../assets/static/image-mockups.png";

const Hero = () => (
  <div className="hero">
    <div className="hero__info">
      <h1>Next generation online banking</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
        voluptatibus debitis consectetur quae Lorem ipsum dolor sit amet
        consectetur. libero inventore itaque culpa.
      </p>
      <button className="btn btn--primary">Request invite</button>
    </div>
    <div className="hero__image">
      <img src={heroImage} alt="Celulares" />
    </div>
  </div>
);

export default Hero;
