import React from 'react';
import Banner from '../components/Banner/banner';
import Img from '../assets/images/IMG_about-banner.png';

export default function About() {
  return (
    <div className="main">
      <Banner url={Img} />
    </div>
  );
}
