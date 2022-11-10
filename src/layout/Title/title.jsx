import React from 'react';

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

export default Title;
