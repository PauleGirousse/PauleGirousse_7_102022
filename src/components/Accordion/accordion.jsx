import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Open_icon from '../../assets/icons/upArrow.svg';
import Closed_icon from '../../assets/icons/downArrow.svg';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion_title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        {isActive ? (
          <img className="icon" src={Open_icon} alt="déplier" />
        ) : (
          <img className="icon" src={Closed_icon} alt="replier" />
        )}
      </div>
      {isActive && <div className="accordion_content">{content}</div>}
    </div>
  );
};
Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node,
};
export default Accordion;
