import React, { useEffect, useState } from 'react';

function Card() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('../../../public/datas/logements.json')
      .then((response) => {
        return response.JSON();
      })
      .then((data) => {
        setItems(data);
      });
  }, []);
  return (
    <div>
      {items.map((card) => (
        <div className="card">
          <h2>{card.title}</h2>
          <img src={card.cover} alt="appartement "></img>
        </div>
      ))}
    </div>
  );
}

export default Card;
