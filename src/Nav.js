import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav className="Navigation-site">
      <ul>
        <li><HashLink smooth to="/home#home">Home</HashLink></li>
        <li><HashLink smooth to="/home#about">About</HashLink></li>
        <li><HashLink smooth to="/home#menu">Menu</HashLink></li>
        <li><Link to="/Booking">Reservations</Link></li>
        <li><HashLink smooth to="/home#review">Reviews</HashLink></li>
        <li><HashLink smooth to="/home#login">Login</HashLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
