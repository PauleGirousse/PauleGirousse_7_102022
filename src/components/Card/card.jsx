import React, { useEffect, useState } from 'react';
import Fiche_logement from '../../pages/Fiche_Logement';

function Card() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('datas/logements.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, []);
  return (
    <a href={Fiche_logement} className="cards">
      {items.map((card) => (
        <figure>
          <img src={card.cover} alt="appartement "></img>
          <figcaption>{card.title}</figcaption>
        </figure>
      ))}
    </a>
  );
}

export default Card;
