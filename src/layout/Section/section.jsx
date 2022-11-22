import React from 'react';
import ImgDesktop from '../../assets/images/IMG_home-banner.png';
import ImgMobile from '../../assets/images/IMG_home_mobile.png';
import Banner from '../../components/Banner/banner';

export default function Section() {
  return (
    <section className="banner">
      <div className="home_banner">
        <Banner urlDesktop={ImgDesktop} urlMobile={ImgMobile} />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </section>
  );
}

//  Section;
