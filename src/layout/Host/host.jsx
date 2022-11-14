import React from 'react';
import PropTypes from 'prop-types';

function Host(props) {
  return (
    <div className="container_host">
      <div className="name">
        <span>{props.host.name}</span>
      </div>
      <img
        src={props.host.picture}
        alt="visage de l'hébergeur"
        className="circle"
      ></img>
    </div>
  );
}
Host.PropTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
};
export default Host;
