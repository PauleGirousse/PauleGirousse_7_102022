import React from 'react';
import Star from '../../assets/icons/star.svg';
import StarGrey from '../../assets/icons/star-grey.svg';

function Stars(props) {
  const rating = props.rating;
  console.log(typeof rating);
  const orangeColor = <img src={Star} alt="étoile" className="star"></img>;
  const greyColor = <img src={StarGrey} alt="étoile" className="star"></img>;

  function ChoiseColor({ rating }) {
    switch (rating) {
      case '5':
        return (
          <div>
            {orangeColor}
            {orangeColor}
            {orangeColor}
            {orangeColor}
            {orangeColor}
          </div>
        );

      case '4':
        return (
          <div>
            {orangeColor}
            {orangeColor}
            {orangeColor}
            {orangeColor}
            {greyColor}
          </div>
        );

      case '3':
        console.log('ici');
        return (
          <div>
            {orangeColor}
            {orangeColor}
            {orangeColor}
            {greyColor}
            {greyColor}
          </div>
        );
      case '2':
        return (
          <div>
            {orangeColor}
            {orangeColor}
            {greyColor}
            {greyColor}
            {greyColor}
          </div>
        );
      case '1':
        return (
          <div>
            {orangeColor}
            {greyColor}
            {greyColor}
            {greyColor}
            {greyColor}
          </div>
        );

      default:
        return (
          <div>
            {greyColor}
            {greyColor}
            {greyColor}
            {greyColor}
            {greyColor}
          </div>
        );
    }
  }

  return (
    <div className="container_stars">
      <ChoiseColor rating={rating} />
    </div>
  );
}

export default Stars;
