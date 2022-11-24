import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/LOGO.svg';

export default function Logo() {
  return (
    <div className="logo">
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
    </div>
  );
}
