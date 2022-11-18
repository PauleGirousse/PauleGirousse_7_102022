import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
// import { useFetch } from '../../utils/hooks/useFetch';
import Error from '../Error/Error';
import Carousel from '../../layout/Carousel/carousel';
import Title from '../../layout/Title/title';
import Stars from '../../layout/Stars/stars';
import Accordion from '../../components/Accordion/accordion';
import Tags from '../../layout/Tags/tags';
import Host from '../../layout/Host/host';

// function SingleCard() {
//   const location = useLocation();
//   console.log(location.pathname);
//   const params = useParams();
//   console.log(params.id);

//   const [items, setItems] = useState([]);
//   const foundCard = items.filter((card) => card.id === params.id);

//   //   const url = '../datas/logements.json';
//   //   const { data, isLoading, error } = useFetch(url, {
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //       Accept: 'application/json',
//   //     },
//   //   });
//   //   console.log(data);
//   //   const { items } = data;
//   useEffect(() => {
//     fetch('../datas/logements.json', {
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         setItems(data);
//         console.log(data);
//       });
//   }, []);
//   console.log(items);
//   // if (error) {
//   //   <Error />;
//   // }

//   // console.log(foundCard);

//   // Si l'identifiant du logement n'est pas valide on renvoie sur la page d'erreur
//   // if (foundCard.length === 0) {
//   //   return <Error />;
//   // }

//   // if (!foundCard || foundCard.length === 0) return <Error />;

//   return (
//     <>
//       {/* {error && <Error />}
//       {loading && 'Loading...'} */}
//       {/* {isLoading ? (
//         <span className="loading">Loading...</span>
//       ) : (
//          */}
//       {!foundCard || foundCard.length === 0 ? (
//         <Error />
//       ) : (
//         foundCard &&
//         foundCard.map(
//           ({
//             title,
//             pictures,
//             description,
//             host,
//             rating,
//             location,
//             equipments,
//             tags,
//           }) => (
//             <div className="main" key={foundCard}>
//               <Carousel pictures={pictures} />
//               <section className="details">
//                 <Title title={title} location={location} />
//                 <Host host={host} />
//                 <Tags tags={tags} />
//                 <Stars rating={rating} />
//               </section>
//               <div className="container_accordion_singleCard">
//                 <Accordion title="Description" content={description} />
//                 <Accordion
//                   title="Equipements"
//                   content={
//                     <ul>
//                       {equipments.map((item) => (
//                         <li key={item}>{item}</li>
//                       ))}
//                     </ul>
//                   }
//                 />
//               </div>
//             </div>
//           )
//         )
//       )}
//     </>
//   );
// }

// export default SingleCard;

function SingleCard() {
  const location = useLocation();
  console.log(location.pathname);
  const params = useParams();
  console.log(params.id);

  const [items, setItems] = useState([]);
  const [foundCard, setFoundCard] = useState();
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setDataLoading(true);
      try {
        const response = await fetch('../datas/logements.json', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });
        const items = await response.json();
        setItems(items);
        console.log(items);
        const card = items.filter((card) => card.id === params.id);
        console.log(card);
        setFoundCard(card);
        console.log(foundCard);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setDataLoading(false);
      }
    }
    fetchData();
  }, []);
  if (error) {
    return <Error />;
  }
  return (
    <>
      {/* {error && <Error />}
      { {loading && 'Loading...'}  */}
      {isDataLoading ? (
        <span className="loading">Loading...</span>
      ) : !foundCard || foundCard.length === 0 ? (
        <Error />
      ) : (
        foundCard &&
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
            <div className="main" key={foundCard}>
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
        )
      )}
    </>
  );
}
export default SingleCard;
