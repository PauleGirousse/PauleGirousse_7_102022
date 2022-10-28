import React from 'react';
import logo_blanc from '../../assets/logo/LOGO-blanc.svg';

export default function Footer() {
  return (
    <footer>
      <div>
        <img src={logo_blanc} className="logo_footer" alt="paysage" />
      </div>
      <p className="footer_text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
