import React from 'react';
import './Header.css'; // Θα δημιουργήσουμε και αυτό το αρχείο για τα στυλ

const Header = () => {
  return (
    <header>
      <nav className="container">
        <ul className="nav-links">
          <li><a href="#home">Αρχική</a></li>
          <li><a href="#about">Σχετικά</a></li>
          <li><a href="#gallery">Γκαλερί</a></li>
          <li><a href="#nearby">Κοντά</a></li>
          <li><a href="#booking">Κράτηση</a></li>
          <li><a href="#offers">Προσφορές</a></li>
          <li><a href="#contact">Επικοινωνία</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
