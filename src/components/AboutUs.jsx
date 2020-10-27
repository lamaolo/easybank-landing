import React from "react";

import "../assets/css/components/AboutUs.scss";
import bankingImage from "../assets/static/icon-online.svg";
import onboardingImage from "../assets/static/icon-onboarding.svg";
import budgetingImage from "../assets/static/icon-budgeting.svg";
import apiImage from "../assets/static/icon-api.svg";

const AboutUs = () => (
  <div className="aboutus-container">
    <div className="about-us">
      <div className="about-us__title">
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before
        </p>
      </div>
      <div className="about-us__badges">
        <article className="badge">
          <div className="badge__image">
            <img src={bankingImage} alt="Online banking" />
          </div>
          <div className="badge__title">
            <h3>Online Banking</h3>
          </div>
          <div className="badge_description">
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
        </article>

        <article className="badge">
          <div className="badge__image">
            <img src={budgetingImage} alt="Simple Budgeting" />
          </div>
          <div className="badge__title">
            <h3>Simple Budgeting</h3>
          </div>
          <div className="badge_description">
            <p>
              See exactly where your money goes each month. Receive
              notifications when you're close to hitting your limits.
            </p>
          </div>
        </article>

        <article className="badge">
          <div className="badge__image">
            <img src={onboardingImage} alt="Fast Onboarding" />
          </div>
          <div className="badge__title">
            <h3>Fast Onboarding</h3>
          </div>
          <div className="badge_description">
            <p>
              We don't branches. Open your account in minutes online and start
              taking control of your finances right away.
            </p>
          </div>
        </article>

        <article className="badge">
          <div className="badge__image">
            <img src={apiImage} alt="Open API" />
          </div>
          <div className="badge__title">
            <h3>Open API</h3>
          </div>
          <div className="badge_description">
            <p>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
);

export default AboutUs;
