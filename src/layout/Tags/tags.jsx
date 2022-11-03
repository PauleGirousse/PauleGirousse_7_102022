import React from 'react';

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

export default Tags;
