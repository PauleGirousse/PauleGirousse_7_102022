import React from 'react';
import PropTypes from 'prop-types';
import Star from '../../assets/icons/star.svg';
import StarGrey from '../../assets/icons/star-grey.svg';

function Stars({ rating }) {
  const orangeColor = <img src={Star} alt="étoile" className="star"></img>;
  const greyColor = <img src={StarGrey} alt="étoile" className="star"></img>;

  return (
    <div className="container_stars">
      {rating >= 1 ? orangeColor : greyColor}
      {rating >= 2 ? orangeColor : greyColor}
      {rating >= 3 ? orangeColor : greyColor}
      {rating >= 4 ? orangeColor : greyColor}
      {rating >= 5 ? orangeColor : greyColor}
    </div>
  );
}
Stars.propTypes = {
  rating: PropTypes.string,
};
export default Stars;
