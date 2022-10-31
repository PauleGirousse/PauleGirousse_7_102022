import React from 'react';

function Title(props) {
  return (
    <div className="container_title">
      <span className="title">{props.title}</span>
      <span className="location">{props.location}</span>
    </div>
  );
}

export default Title;
