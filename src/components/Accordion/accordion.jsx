import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Open_icon from '../../assets/icons/up.svg';
import Closed_icon from '../../assets/icons/down.svg';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion_title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>
          {isActive ? (
            <img className="icon" src={Open_icon} alt="chevron ouvrant" />
          ) : (
            <img className="icon" src={Closed_icon} alt="chevron fermant" />
          )}
        </div>
      </div>
      {isActive && <div className="accordion_content">{content}</div>}
    </div>
  );
};
Accordion.propTypes = {
  title: PropTypes.string,

  content: PropTypes.node,
};
export default Accordion;

// function Accordion({ title, content }) {
//   const [active, setActive] = useState(false);

//   const handleToggle = (e) => {
//     setActive(!active);
//   };
//   return (
//     <div className={`accordion" ${active && 'active'}`}>
//       <div className="accordion_title" onClick={handleToggle}>
//         {title}
//         <div className="accordion_icon">
//           {active ? { open_icon } : { closed_icon }}
//         </div>
//       </div>
//       <div className="accordion_content">{content}</div>
//     </div>
//   );
// }

// export default Accordion;
