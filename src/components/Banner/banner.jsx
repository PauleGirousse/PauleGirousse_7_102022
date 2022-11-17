import React from 'react';
import PropTypes from 'prop-types';

// function Banner(props) {

const Banner = ({ urlDesktop, urlMobile }) => {
  return (
    <picture>
      <source
        media="(min-width:793px)"
        srcSet={urlDesktop}
        alt="paysage"
      ></source>
      <source
        media="(max-width:792px)"
        srcSet={urlMobile}
        alt="paysage"
      ></source>
      <img src={urlDesktop} alt="paysage" />
    </picture>
  );
};
Banner.propTypes = {
  urlDesktop: PropTypes.string,
  urlMobile: PropTypes.string,
};
export default Banner;
