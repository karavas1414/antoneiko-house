import React from 'react';
import './Nearby.css';

const places = [
  {
    title: 'Παραλία Θαψά',
    description:
      'Μια από τις ωραιότερες παραλίες της Εύβοιας με νερά τόσο καθαρά που καθρεφτίζουν τον ήλιο και άμμο που σε κάνει να θες να ξαπλώσεις ατέλειωτα.',
    image: '/images/thapsa.jpg',
    distance: '45 Λεπτά Απόσταση',
    link: 'https://maps.app.goo.gl/weGGhTpiLoD6c1hWA'
  },
  {
    title: 'Παραλία Καλάμου',
    description:
      'Παραλία για καρτ ποστάλ: γαλαζογάλανα νερά, φυσική σκιά από πεύκα και ατμόσφαιρα χαλάρωσης.',
    image: '/images/kalamos.jpg',
    distance: '30 Λεπτά Απόσταση',
    link: 'https://maps.app.goo.gl/p8Rha322ANdSiAbY8'
  },
  {
    title: 'Παραλία Στομίου',
    description:
      'Ήσυχη παραλία με πεντακάθαρα νερά, ιδανική για οικογενειακές αποδράσεις και κουβαδάκια.',
    image: '/images/Stomio.jpg',
    distance: '10 Λεπτά Απόσταση',
    link: 'https://maps.app.goo.gl/KRqX68jGxPXUGw5o8'
  },
  {
    title: 'Μύλος του Σαντά',
    description:
      'Καταρράκτης και γεφύρια βγαλμένα από παραμύθι. Τέλειο σημείο για πεζοπορία και φωτογραφίες.',
    image: '/images/santa.jpg',
    distance: '15 Λεπτά Απόσταση',
    link: 'https://maps.app.goo.gl/xJiJvsMhmyGmiDxX7'
  },
  {
    title: 'Κατάρακτης Μανίκια',
    description:
      'Πανέμορφος φυσικός χώρος με ποτάμια και καταρράκτες. Ιδανικός για φυσιολάτρες και εξερεύνηση.',
    image: '/images/kataraktis.jpg',
    distance: '20 Λεπτά Απόσταση',
    link: 'https://maps.app.goo.gl/Coez7mH4fDRRaon47'
  }
];

const Nearby = () => {
  return (
    <section id="nearby" className="section">
      <div className="container">
        <h2>Μέρη για Εξερεύνηση</h2>
        <div className="nearby-places">
          {places.map((place, idx) => (
            <div className="place-card" key={idx}>
              <img src={place.image} alt={place.title} />
              <div className="place-info">
                <h3>{place.title}</h3>
                <p>{place.description}</p>
                <a href={place.link} className="place-distance" target="_blank" rel="noopener noreferrer">
                  {place.distance}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nearby;
