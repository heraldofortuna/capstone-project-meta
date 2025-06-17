import React from "react";
import './Promo.css';
import introImage from './images/intro.jpg'; 


function Promo() {
  return (
    <section className="promo-wrapper">
      <div className="promo-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family-owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
        </p>
        <button class="reserve-button">Reserve a Table</button>
      </div>
      <div className="promo-image">
        <img src={introImage} alt="restaurant intro" />
      </div>
    </section>
  );
}

export default Promo;
