import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Logo from '../../components/Logo/logo';
import { useLocation } from 'react-router-dom';
import Footer from '../../layout/Footer/Footer';

const Layout = () => {
  const location = useLocation();
  // console.log(location);
  return (
    <div>
      <header>
        <Logo />
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={(nav) =>
                  nav.isActive && location.pathname === '/' ? 'nav-active' : ''
                }
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
    </div>
  );
};
export default Layout;