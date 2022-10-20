import React from 'react';
import Img from '../../assets/images/IMG_home-banner.png';
import Banner from '../../components/Banner/banner';

function Section() {
  return (
    <section className="sct">
      <Banner url={Img} />
      <h1>Chez vous, partout et ailleurs</h1>
    </section>
  );
}

export default Section;
