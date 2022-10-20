import React from 'react';
import logo_blanc from '../../assets/logo/LOGO-blanc.svg';
// import Logo from '../../components/Logo/logo';

export default function footer() {
  return (
    <footer>
      {/* <Logo /> */}
      <div>
        <img src={logo_blanc} className="logo_footer" alt="paysage" />
      </div>
      <p className="footer_text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
