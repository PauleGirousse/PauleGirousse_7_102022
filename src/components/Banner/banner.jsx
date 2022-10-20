import React from 'react';

function Banner(props) {
  return (
    <div className="banner">
      <img src={props.url} alt="paysage" />
    </div>
  );
}
export default Banner;

// import Img1 from '../../assets/images/IMGHome-banner.png';
// {
//   /* <img src={Img2} className="IMG_about" alt="paysage" /> */
// }
// import Img2 from '../../assets/images/IMGabout.png';
