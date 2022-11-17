import React from 'react';
import PropTypes from 'prop-types';

function Host(props) {
  return (
    <div className="container_host">
      <div className="name">
        <span key={props.host.name}>{props.host.name}</span>
      </div>
      <img
        key={props.host.picture}
        src={props.host.picture}
        alt="visage de l'hébergeur"
        className="circle"
      ></img>
    </div>
  );
}
Host.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
};

export default Host;
