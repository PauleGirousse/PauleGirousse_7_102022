import React from 'react';
import logo_k from '../../assets/logo/Vector_k.png';
import logo_maison from '../../assets/logo/Vector_maison.png';
import logo_porte from '../../assets/logo/Vector_porte.png';
import logo_s from '../../assets/logo/Vector_s.png';
import logo_a from '../../assets/logo/Vector_a.png';

export default function Logo() {
  return (
    <div className="logos logo--footer">
      <img src={logo_k} className="logo_k" alt="" />
      <img src={logo_maison} className="logo_maison" alt="" />
      <img src={logo_porte} className="logo_porte" alt="" />
      <img src={logo_s} className="logo_s" alt="" />
      <img src={logo_a} className="logo_a" alt="" />
    </div>
  );
}
