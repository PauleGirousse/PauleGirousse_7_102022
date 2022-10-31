import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
// import { Cardtype } from '../layout/Cards/cards';
import Carousel from '../layout/Carousel/carousel';
import Title from '../layout/Title/title';
// import { baseURL } from 'datas/logements.json';

// import Accordion from '../components/Accordion/accordion';
import Star from '../assets/logo/star.svg';
import Accordion from '../components/Accordion/accordion';

function SingleCard() {
  const location = useLocation();
  console.log(location.pathname);
  const params = useParams();
  console.log(params.id);

  const [items, setItems] = useState([]);
  useEffect(() => {
    // const singleCardApiUrl = `../datas/logements.json?id=${params.id}`;

    fetch('../datas/logements.json', {
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
  const foundCard = items.filter((card) => card.id === params.id);
  console.log(foundCard);

  return (
    <div>
      {foundCard &&
        foundCard.map(
          ({
            title,
            pictures,
            description,
            host,
            rating,
            location,
            equipments,
            tag,
          }) => (
            <div className="main" key={foundCard.id}>
              <Carousel pictures={pictures} />
              <Title title={title} location={location} />
              <section className="details">
                <div className="container_tags">
                  <div className="tag">
                    <span>Cosy</span>
                  </div>
                  <div className="tag">
                    <span>Canal</span>
                  </div>
                  <div className="tag">
                    <span>Paris 10</span>
                  </div>
                </div>
                <div className="container_icons">
                  <div className="host">
                    <div className="name">
                      <span>Alexandre Dumas</span>
                    </div>
                    <div className="circle"></div>
                  </div>
                  <div className="stars">
                    <img src={Star} alt="étoile" className="star"></img>
                    <img src={Star} alt="étoile" className="star"></img>
                    <img src={Star} alt="étoile" className="star"></img>
                    <img src={Star} alt="étoile" className="star"></img>
                    <img src={Star} alt="étoile" className="star"></img>
                  </div>
                </div>
              </section>
              <div className="container_accordion">
                <Accordion content={description} />
                <Accordion content={equipments} />
              </div>
            </div>
          )
        )}
    </div>
  );
}

export default SingleCard;

// {
//   /* { <div>
//   {items.map((card) => (const [items, setItems] = useState([]);
//    useEffect(() => {
//    fetch('datas/logements.json', {
//        headers: {
//     'Content-Type': 'application/json',
//      Accept: 'application/json',
//     },
//   })
//     .then((response) => {
//         return response.json();
//      })
//       .then((data) => {
//        data.forEach((card) => {
//         setItem(card);
//       console.log(card);
//         setItems(data)
//            });
//         });
//       }, []);
//           <Accordion title="Description" content={card.description} />
//   ))}
//    </div>
//  <div>
//   {items.map((card) => (
//       <Accordion title="Equipement" content={card.equipments} />
//      ))}
//    ;
// </div>  */
// }

// {
//   /* const id = get_id.current.value;

//     if (id)
//      try {
//             const res = await fetch(`${baseURL}/${id}`);

//             if (!res.ok) {
//                 const message = `An error has occured: ${res.status} - ${res.statusText}`;
//                 throw new Error(message);
//               }

//               const data = await res.json();

//               const result = {
//                   data: data,
//                   status: res.status,
//                   statusText: res.statusText,
//                   headers: {
//                       'Content-Type': res.headers.get('Content-Type'),
//                       'Content-Length': res.headers.get('Content-Length'),
//                     },
//                   };

//                   setGetResult(fortmatResponse(result));
//                 } catch (err) {
//                     setGetResult(err.message);
//                   }
//                 }
//               }

//               const [getResult, setGetResult] = useState(null);
//               const fortmatResponse = (res) => {
//                 return JSON.stringify(res, null, 2);
//               };
//               const [items, setItems] = useState([]); */
// }

// let card = {
//   id: params.id,
//   title: foundCard.title,
//   cover: foundCard.cover,
//   pictures: [foundCard.pictures],
//   description: foundCard.description,
//   host: { name: foundCard.name, picture: foundCard.picture },
//   rating: foundCard.rating,
//   location: foundCard.location,
//   equipments: [foundCard.equipments],
//   tags: [foundCard.tags],
// };
// console.log(card.title);

// {/* <div className="container_title">
//   <div className="title">{title}</div>
//   <div className="location">{location}</div> */}
