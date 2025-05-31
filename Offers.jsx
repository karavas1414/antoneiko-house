import React, { useEffect, useState } from 'react';
import './Offers.css';

const Offers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function fetchOffers() {
      try {
        const response = await fetch(
          'https://drive.google.com/uc?export=download&id=1f-aZmx8fNPV6OPnxIaC_SDxHgRw-fO9e'
        );
        const text = await response.text();
        const lines = text.split('\n').map(line => line.trim()).filter(Boolean);

        const parsedOffers = lines
          .map(line => {
            const match = line.match(/(\d{1,2}-\d{1,2}-\d{4}) έως (\d{1,2}-\d{1,2}-\d{4})\s+(\d+)(€?)/);
            if (match) {
              const [_, start, end, price, currency] = match;
              return `Από ${start} έως ${end} με ${price}${currency}`;
            }
            return null;
          })
          .filter(Boolean);

        setOffers(parsedOffers);
      } catch (error) {
        console.error('Σφάλμα φόρτωσης προσφορών:', error);
      }
    }

    fetchOffers();
  }, []);

  return (
    <section id="offers" className="section">
      <div className="container">
        <h2>Προσφορές</h2>
        <ul className="offers-list">
          {offers.length > 0 ? (
            offers.map((offer, idx) => <li key={idx}>{offer}</li>)
          ) : (
            <li>Δεν υπάρχουν διαθέσιμες προσφορές αυτή τη στιγμή.</li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Offers;
