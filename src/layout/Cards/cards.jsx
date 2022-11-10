import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import SingleCard from '../../pages/SingleCard';
// import useFetch from '../utils/hooks';
// import Card from '../../components/Card/card';
// export type Cardtype = {
//   id: string;
//   title: string;
//   cover: string;
// };
// type Datatype = Array<Cardtype>;

function Cards() {
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
        console.log(data);
      });
  }, []);
  return (
    <section className="cards">
      {items.map((card) => (
        <Link to={`house/${card.id}`} key={card.id} className="house_link">
          <figure>
            <img src={card.cover} alt="appartement"></img>
            <figcaption>{card.title}</figcaption>
          </figure>
        </Link>
      ))}
    </section>
  );
}

export default Cards;

// <Card key={id} card={card} />

//         <Link to= {"house/"{id}}>
// //    to={{ screen: { SingleCard }, params: { id: card.id } }}
// //    key={card.id}
// //  > */}
/* <Link to={SingleCard} key={card.id}> */
