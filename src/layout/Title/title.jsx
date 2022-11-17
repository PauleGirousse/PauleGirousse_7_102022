import React from 'react';
import PropTypes from 'prop-types';

function Title(props) {
  return (
    <div className="container_title">
      <span key={props.title} className="title">
        {props.title}
      </span>
      <span key={props.location} className="location">
        {props.location}
      </span>
    </div>
  );
}
Title.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
};
export default Title;
