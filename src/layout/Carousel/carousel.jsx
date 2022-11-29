import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LeftArrow from '../../assets/icons/leftArrow.svg';
import RightArrow from '../../assets/icons/rightArrow.svg';

function Carousel({ pictures }) {
  const slides = pictures;
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="carousel">
      {slides.length === 1 ? (
        ''
      ) : (
        <>
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
        </>
      )}
      <img
        src={slides[current]}
        alt="intérieur du logement"
        className="image"
      />
    </section>
  );
}
Carousel.propTypes = {
  pictures: PropTypes.array,
};
export default Carousel;
