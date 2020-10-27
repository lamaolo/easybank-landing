import React from "react";

import "../assets/css/components/Articles.scss";
import articleBg1 from "../assets/static/image-currency.jpg";
import articleBg2 from "../assets/static/image-restaurant.jpg";
import articleBg3 from "../assets/static/image-plane.jpg";
import articleBg4 from "../assets/static/image-confetti.jpg";

const Articles = () => (
  <div className="articles-container">
    <div className="articles-title">
      <h2>Latest Articles</h2>
    </div>
    <div className="articles-content">
      <article className="article">
        <div className="article__image">
          <img src={articleBg1} alt="Currency" />
        </div>
        <div className="article__content">
          <h6 className="article_author">
            <strong>By: </strong>Calire Robinson
          </h6>
          <h4>Recieve money in any currency with no fees</h4>
          <h5>
            The world is getting smaller and we're becoming more mobile. So why
            should you be forced to only recieve money in a singe ...
          </h5>
        </div>
      </article>

      <article className="article">
        <div className="article__image">
          <img src={articleBg4} alt="Currency" />
        </div>
        <div className="article__content">
          <h6 className="article_author">
            <strong>By: </strong>Calire Robinson
          </h6>
          <h4>Recieve money in any currency with no fees</h4>
          <h5>
            The world is getting smaller and we're becoming more mobile. So why
            should you be forced to only recieve money in a singe ...
          </h5>
        </div>
      </article>

      <article className="article">
        <div className="article__image">
          <img src={articleBg3} alt="Currency" />
        </div>
        <div className="article__content">
          <h6 className="article_author">
            <strong>By: </strong>Calire Robinson
          </h6>
          <h4>Recieve money in any currency with no fees</h4>
          <h5>
            The world is getting smaller and we're becoming more mobile. So why
            should you be forced to only recieve money in a singe ...
          </h5>
        </div>
      </article>

      <article className="article">
        <div className="article__image">
          <img src={articleBg2} alt="Currency" />
        </div>
        <div className="article__content">
          <h6 className="article_author">
            <strong>By: </strong>Calire Robinson
          </h6>
          <h4>Recieve money in any currency with no fees</h4>
          <h5>
            The world is getting smaller and we're becoming more mobile. So why
            should you be forced to only recieve money in a singe ...
          </h5>
        </div>
      </article>
    </div>
  </div>
);

export default Articles;
