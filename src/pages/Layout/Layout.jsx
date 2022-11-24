import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Logo from '../../layout/Logo/logo';
import Footer from '../../layout/Footer/Footer';

const Layout = () => {
  return (
    <>
      <header>
        <Logo />
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                end
                className={(nav) => (nav.isActive ? 'nav-active' : '')}
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="About"
                className={(nav) => (nav.isActive ? 'nav-active' : '')}
              >
                A propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
