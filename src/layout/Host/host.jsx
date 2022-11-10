import React from 'react';

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

export default Host;
