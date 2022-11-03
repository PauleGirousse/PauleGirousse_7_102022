import React from 'react';

function Tags(props) {
  const tags = props.tags;
  return (
    <div className="container_tags">
      {tags.map((item) => (
        <div className="tag" key={tags.index}>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

export default Tags;
{
  /* <div className="tag">
  <span>Canal</span>
</div>
<div className="tag">
  <span>Paris 10</span>
</div>  */
}
