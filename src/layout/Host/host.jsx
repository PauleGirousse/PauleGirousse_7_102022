import React from 'react';
import PropTypes from 'prop-types';

function Host({ host }) {
  return (
    <div className="container_host">
      <div className="name">
        <span key={host.name}>{host.name}</span>
      </div>
      <img
        key={host.picture}
        src={host.picture}
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
