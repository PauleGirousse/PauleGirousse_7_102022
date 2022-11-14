import React from 'react';
import PropTypes from 'prop-types';

function Tags(props) {
  const tags = props.tags;
  return (
    <div className="container_tags">
      {tags.map((item) => (
        <div className="tag" key={item}>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
Tags.PropTypes = {
  tags: PropTypes.string,
};
export default Tags;
