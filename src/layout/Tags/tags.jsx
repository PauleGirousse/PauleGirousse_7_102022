import React from 'react';
import PropTypes from 'prop-types';

const Tags = ({ tags }) => {
  return (
    <div className="container_tags">
      {tags.map((item) => (
        <div className="tag" key={item}>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};
Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};
export default Tags;
