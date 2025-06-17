import React from 'react';
import './Footersection.css';
import FooterImage from './images/footer.png';

function Footersection() {
  return (
    <footer className="footer-section">
      <div className="logo-section">
        <img src={FooterImage} alt="Footer logo" />
      </div>
      <div className="navigation-section">
        <h2>Navigation</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
      <div className="contact-section">
        <h2>Contact</h2>
        <ul>
          <li>Phone: (709) 879-4459</li>
          <li>Email: <a href="mailto:little_lemon@gmail.com">little_lemon@gmail.com</a></li>
        </ul>
      </div>
      <div className="socials-section">
        <h2>Socials</h2>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div className="footer-note">2025 © Little Lemon</div>
    </footer>
  );
}

export default Footersection;
