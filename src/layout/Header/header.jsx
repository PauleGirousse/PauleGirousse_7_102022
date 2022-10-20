import React from 'react';
import Logo from '../../components/Logo/logo';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          <NavLink
            to="/"
            // className={({ isActive }) => (isActive ? 'activeLink' : undefined)}
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/About"
            // className={({ isActive }) => (isActive ? 'activeLink' : undefined)}
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            <li>A Propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
