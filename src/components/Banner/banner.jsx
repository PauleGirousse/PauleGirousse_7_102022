import React from 'react';

function Banner(props) {
  return (
    // <div className="banner">
    //   <img src={props.url} alt="paysage" />
    // </div>
    <picture>
      <source
        media="(min-width:793px)"
        srcSet={props.urlDesktop}
        alt="paysage"
      ></source>
      <source
        media="(max-width:792px)"
        srcSet={props.urlMobile}
        alt="paysage"
      ></source>
      <img src={props.urlDesktop} alt="paysage" />
    </picture>
  );
}
export default Banner;

// import Img1 from '../../assets/images/IMGHome-banner.png';
// {
//   /* <img src={Img2} className="IMG_about" alt="paysage" /> */
// }
// import Img2 from '../../assets/images/IMGabout.png';

// <picture className='banner'>
//   <source media="(min-width:1000px)" srcSet=""
// </picture>
