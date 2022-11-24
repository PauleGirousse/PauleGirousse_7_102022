import React from 'react';
import PropTypes from 'prop-types';

function Title({ title, location }) {
  return (
    <div className="container_title">
      <h1 key={title} className="title">
        {title}
      </h1>
      <span key={location} className="location">
        {location}
      </span>
    </div>
  );
}
Title.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
};
export default Title;
