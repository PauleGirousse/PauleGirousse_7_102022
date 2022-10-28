import React from 'react';

function Carousel(props) {
  // const slides = [props.pictures];
  return (
    <div>
      {/* {items.map((pictures, index) => (
        <img src={pictures.pictures} alt="logement"></img>
      ))} */}
    </div>
  );
}

export default Carousel;

//   const [items, setItems] = useState([{}]);

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
//       });
//   }, []);
