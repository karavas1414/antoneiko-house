import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Antoneiko House</h1>
        <p>Το τέλειο καταφύγιο για τις διακοπές σας</p>
        <a href="#booking" className="cta-button">Κάντε Αίτημα Κράτησης</a>
      </div>
    </section>
  );
};

export default Hero;
