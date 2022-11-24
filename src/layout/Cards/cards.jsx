import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useFetch } from '../../utils/hooks/useFetch';

function Cards() {
  const { data, isLoading, error } = useFetch('datas/logements.json');
  const items = data;

  if (error) {
    alert('Une erreur est survenue, veuillez réessayer ultérieurement');
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
