import React from 'react';
import { useState } from 'react';
import open_icon from '../../assets/logo/icon_up.png';
import closed_icon from '../../assets/logo/icon_down.png';

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

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordions">
      <div className="accordion_title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>
          {isActive ? (
            <img clasName="icon" src={open_icon} alt="chevron ouvrant" />
          ) : (
            <img className="icon" src={closed_icon} alt="chevron fermant" />
          )}
        </div>
      </div>
      {isActive && <div className="accordion_content">{content}</div>}
    </div>
  );
};
export default Accordion;
