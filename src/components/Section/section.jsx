import React from 'react';
import img from '../../assets/images/IMGHome-section.png';

function Section() {
  return (
    <div className="section">
      <img src={img} className="IMG_home" alt="paysage" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Section;
