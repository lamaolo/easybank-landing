import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

import "./assets/css/App.css";
import "./assets/css/Media.scss";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
