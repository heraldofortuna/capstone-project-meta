import React from 'react';
import './Online.css';
import { Link } from 'react-router-dom';
import bruschetta from './images/bruschetta.png';
import greeksalad from './images/greek-salad.jpg';
import lemondesert from './images/lemon.jpg';

function Online() {
  return (
    <section className="online-order-site" id="menu">
      <section className="special-section-part-one">
        <div className="text-ref">
          <h1>This Week's Specials!</h1>
        </div>
        <div className="order-online">
          <Link to="/Booking">
            <button>Order Online</button>
          </Link>
        </div>
      </section>
      <section className="special-section-part-two">
        <div className="menu-card">
          <img src={greeksalad} alt="Greek Salad" />
          <div className="menu-card-content">
            <div className="menu-card-header">
              <h3>Greek Salad</h3>
              <span className="price">$12.99</span>
            </div>
            <p>
              The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
            </p>
            <Link to="/Booking" className="order-link">
              Order a delivery <span className="icon">🛵</span>
            </Link>
          </div>
        </div>

        <div className="menu-card">
          <img src={bruschetta} alt="Bruschetta" />
          <div className="menu-card-content">
            <div className="menu-card-header">
              <h3>Bruschetta</h3>
              <span className="price">$5.99</span>
            </div>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
            </p>
            <Link to="/Booking" className="order-link">
              Order a delivery <span className="icon">🛵</span>
            </Link>
          </div>
        </div>

        <div className="menu-card">
          <img src={lemondesert} alt="Lemon Dessert" />
          <div className="menu-card-content">
            <div className="menu-card-header">
              <h3>Lemon Dessert</h3>
              <span className="price">$4.99</span>
            </div>
            <p>
              This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
            </p>
            <Link to="/Booking" className="order-link">
              Order a delivery <span className="icon">🛵</span>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Online;
