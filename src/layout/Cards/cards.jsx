import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useFetch } from '../../utils/hooks/useFetch';
import Error from '../../pages/Error/Error';

// function Cards() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetch('datas/logements.json', {
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

//     //  (error) {
//     //   console.log(error)

//     // .catch((error) => console.log(error))
//   }, []);
//   return (
//     <section className="cards">
//       {items.map((card) => (
//         <Link to={`house/${card.id}`} key={card.id} className="house_link">
//           <figure>
//             <img src={card.cover} alt="appartement"></img>
//             <figcaption>{card.title}</figcaption>
//           </figure>
//         </Link>
//       ))}
//     </section>
//   );
// }  const [error, setError] = useState();
// Cards.propTypes = {
//   cover: PropTypes.string,
//   title: PropTypes.string,
// };
// export default Cards;

function Cards() {
  const { data, isLoading, error } = useFetch(
    'datas/logements.json'
    // , {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //   },
    // }
  );
  const items = data;
  console.log(items);

  // const [items, setItems] = useState([]);
  // const [isDataLoading, setDataLoading] = useState(false);
  // const [error, setError] = useState();

  // useEffect(() => {
  // async function fetchData() {
  //   setDataLoading(true);
  //   try {
  //     const response = await fetch('datas/logements.json', {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //     });
  //     const items = await response.json();
  //     setItems(items);
  //   } catch (error) {
  //     console.log(error);
  //     setError(true);
  //   } finally {
  //     setDataLoading(false);
  //   }
  // }
  // fetchData();
  // }, []);
  if (error) {
    <Error />;
  }
  return (
    <section className="cards">
      {isLoading ? (
        <span className="loading">Loading...</span>
      ) : (
        items &&
        items.map((card) => (
          <Link to={`house/${card.id}`} key={card.id} className="house_link">
            <figure>
              <img src={card.cover} alt="appartement"></img>
              <figcaption>{card.title}</figcaption>
            </figure>
          </Link>
        ))
      )}
    </section>
  );
}
Cards.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
};
export default Cards;

// function Cards() {
//   const [datas, setDatas] = useState({});
//   const [isDataLoading, setDataLoading] = useState(false);
//   // const [error, setError] = useState();

//   // Cette syntaxe permet aussi bien de faire des calls API.
//   // Mais pour utiliser await dans une fonction, il faut que celle-ci soit async (pour asynchrone).
//   // Comme la fonction passée à useEffect ne peut pas être asynchrone,
//   // il faut utiliser une fonction qui est appelée dans useEffect et déclarée en dehors, comme ici 👇.
//   // Essayez de commenter le code créé dans le chapitre et de décommenter fetchData pour voir.

//   // async function fetchData() {
//   //   try {
//   //     const response = await fetch('datas/logements.json', {
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //         Accept: 'application/json',
//   //       },
//   //     });
//   //     const { datas } = await response.json();
//   //     setDatas(datas);
//   //   } catch (error) {// async function fetchData(){
//   try{
//     const response = await fetch()
//   }
// }

// useEffect(() => {
//   setDataLoading(true);
//   fetch('datas/logements.json', {
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       setItems(data);
//       setDataLoading(false);
//       console.log(data);
//     })

//     .catch((error) => console.log(error));

//   //  (error) {
//   //   console.log(error)

//   // .catch((error) => console.log(error))
// }, []);
//   //     console.log('===== error =====', error);
//   //     setError(true);
//   //   }
//   // }

//   useEffect(() => {
//     // fetchData();
//     setDataLoading(true);
//     fetch('datas/logements.json', {
//       // headers: {
//       //   'Content-Type': 'application/json',
//       //   Accept: 'application/json',
//       // },
//     }).then((response) =>
//       response.json().then(({ datas }) => {
//         setDatas(datas);
//         setDataLoading(false);
//       })
//     );
//   }, []);
//   return (
//     <section className="cards">
//       {isDataLoading ? (
//         <span>Loading...</span>
//       ) : (
//         datas.map((card) => (
//           <Link to={`house/${card.id}`} key={card.id} className="house_link">
//             <figure>
//               <img src={card.cover} alt="appartement"></img>
//               <figcaption>{card.title}</figcaption>
//             </figure>
//           </Link>
//         ))
//       )}
//     </section>
//   );
// }
// Cards.propTypes = {
//   cover: PropTypes.string,
//   title: PropTypes.string,
// };
// export default Cards;

// async function fetchData(){
//   try{
//     const response = await fetch()
//   }
// }

// useEffect(() => {
//   setDataLoading(true);
//   fetch('datas/logements.json', {
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       setItems(data);
//       setDataLoading(false);
//       console.log(data);
//     })

//     .catch((error) => console.log(error));

//   //  (error) {
//   //   console.log(error)

//   // .catch((error) => console.log(error))
// }, []);
