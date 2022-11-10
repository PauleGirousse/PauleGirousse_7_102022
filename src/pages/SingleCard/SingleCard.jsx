import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
// import Error from '../Error/Error';
import Carousel from '../../layout/Carousel/carousel';
import Title from '../../layout/Title/title';
import Stars from '../../layout/Stars/stars';
// import useFetch from '../../utils/hooks/useFetch';
import Accordion from '../../components/Accordion/accordion';
import Tags from '../../layout/Tags/tags';
import Host from '../../layout/Host/host';

function SingleCard() {
  const location = useLocation();
  console.log(location.pathname);
  const params = useParams();
  console.log(params.id);

  const [items, setItems] = useState([]);
  useEffect(() => {
    // const url = '../datas/logements.json';
    // const { loading, items, error } = useFetch(url, []);

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

  // Si l'identifiant du logement n'est pas valide on renvoie sur la page d'erreur
  // if (foundCard === []) {
  //   return <Error />;
  // }
  // if (!foundCard.id) return <Error />;
  return (
    <div>
      {/* {foundCard === []} <Error /> */}
      {/* {error && <Error />}
      {loading && 'Loading...'} */}
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
            tags,
          }) => (
            <div className="main" key={foundCard.id}>
              <Carousel pictures={pictures} />
              <section className="details">
                <Title title={title} location={location} />
                <Host host={host} />
                <Tags tags={tags} />
                <Stars rating={rating} />
              </section>
              <div className="container_accordion_singleCard">
                <Accordion title="Description" content={description} />
                <Accordion
                  title="Equipements"
                  content={
                    <ul>
                      {equipments.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  }
                />
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
//        headers: {import useFetch from '../utils/hooks/useFetch';
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

{
  /* <div className="stars">
  <img src={Star} alt="étoile" className="star"></img>
  <img src={Star} alt="étoile" className="star"></img>
  <img src={Star} alt="étoile" className="star"></img>
  <img src={Star} alt="étoile" className="star"></img>
  <img src={Star} alt="étoile" className="star"></img>
</div> */
}

{
  /* <div className="container_tags">
   <div className="tag">
   <span>Cosy</span>
   </div>
   <div className="tag">
   <span>Canal</span>
  </div>
  <div className="tag">
  <span>Paris 10</span>
  </div>
  </div>  */
}

{
  /* <div className="container_host"> */
}
{
  /* <div className="name">
    <span>{host.name}</span>
  </div>
  <div className="circle"></div> */
}
{
  /* </div> */
}
