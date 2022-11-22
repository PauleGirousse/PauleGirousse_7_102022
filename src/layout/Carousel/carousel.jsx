import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LeftArrow from '../../assets/icons/leftArrow.svg';
import RightArrow from '../../assets/icons/rightArrow.svg';

function Carousel(props) {
  const slides = props.pictures;
  // initialisation à l'index 0 des url
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="carousel">
      {slides.length === 1 ? (
        ''
      ) : (
        <div>
          <div className="pagination">
            {current + 1}/{slides.length}
          </div>
          <img
            src={LeftArrow}
            alt="flèche gauche"
            className="left-arrow"
            onClick={prevSlide}
          />
          <img
            src={RightArrow}
            alt="flèche droite"
            className="right-arrow"
            onClick={nextSlide}
          />
        </div>
      )}
      {/* <div className={slides[current] ? 'img-active' : 'img-passive'}> */}
      <img
        src={slides[current]}
        alt="intérieur du logement"
        className={slides[current] ? 'img-active' : 'img-passive'}
        // className="image"
      />
      {/* </div> */}
    </section>
  );
}
Carousel.propTypes = {
  pictures: PropTypes.array,
};
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

// {/* {items.map((pictures, index) => (
//   <img src={pictures.pictures} alt="logement"></img>
// ))} */}
