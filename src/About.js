import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import image1 from './images/ourstory.jpg';
import image2 from './images/restaurent.jpg';
import image3 from './images/chef.png';
import './About.css';

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const aboutItems = [
    {
      id: 1,
      image: image2,
    },
    {
      id: 2,
      image: image1,
    },
    {
      id: 3,
      image: image3,
    },
  ];

  function handleNext() {
    setDirection(1);
    setCurrentIndex(function(prev) {
      return (prev + 1) % aboutItems.length;
    });
  }

  function handlePrev() {
    setDirection(-1);
    setCurrentIndex(function(prev) {
      return (prev - 1 + aboutItems.length) % aboutItems.length;
    });
  }

  const cardVariants = {
    enter: function(direction) {
      return {
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 270, damping: 25 },
        opacity: { duration: 0.19 },
      },
    },
    exit: function(direction) {
      return {
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
        transition: {
          x: { type: 'spring', stiffness: 270, damping: 25 },
          opacity: { duration: 0.19 },
        },
      };
    },
  };

  return (
    <section className="about-section" id="about">
      <div className="about-header">
        <h2>About Little Lemon</h2>
        <p>Discover what makes our Mediterranean restaurant special.</p>
      </div>
      <div className="about-content">
        <div className="carousel-wrapper">
          <div className="carousel-container">
            <button className="arrow arrow-left" onClick={handlePrev}>
              <span>←</span>
            </button>
            <div className="carousel-slide">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  className="card"
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  custom={direction}
                >
                  <img src={aboutItems[currentIndex].image} alt={`Slide ${aboutItems[currentIndex].id}`} />
                </motion.div>
              </AnimatePresence>
            </div>
            <button className="arrow arrow-right" onClick={handleNext}>
              <span>→</span>
            </button>
          </div>
        </div>
         <div className="about-text">
          <p>
Little Lemon Chicago is a family owned Mediterranean restaurant located in the heart of the city. The restaurant is run by brothers Mario and Adrian, who have always had a passion for cooking and serving delicious food. Growing up in a Mediterranean household, the brothers were exposed to traditional recipes from an early age, and they decided to bring those recipes to the masses with a modern twist. At Little Lemon, you can expect to find a menu full of classic dishes with a creative twist that makes them stand out from the rest. Whether you're looking for a quick lunch or a leisurely dinner, Little Lemon Chicago is the perfect place to indulge in a delicious meal in a cozy and welcoming atmosphere.          </p>
        </div>
      </div>
    </section>
  );
}

export default About;