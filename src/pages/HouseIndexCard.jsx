import React from 'react';
import Carroussel from '../components/Carroussel/carroussel';
// import Accordion from '../components/Accordion/accordion';

function HouseIndexCard() {
  // const [items, setItems] = useState([]);
  // useEffect(() => {
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
  //     });
  // }, []);

  return (
    <div>
      <Carroussel />
      <div className="container_title">
        <span className="title">Titre</span>
        <span className="title_location"></span>
      </div>
      <div className="name"></div>
      <div className="circle"></div>
      <div className="container_tags">
        <div className="tag"></div>
        <div className="tag"></div>
        <div className="tag"></div>
      </div>
      <div className="stars">
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
      </div>
      {/* <div>
        {logement.map(({ title, content }) => (
          <Accordion title="Description" content={description} />
        ))}
      </div>
      <div>
        {logementsDatas.map(({ title, content }) => (
          <Accordion title="Equipement" content={equipments} />
        ))}
      </div> */}
    </div>
  );
}

export default HouseIndexCard;
