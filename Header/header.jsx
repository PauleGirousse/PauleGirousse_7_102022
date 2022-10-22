import React from 'react';
import Logo from '../src/components/Logo/logo';
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

// const Header = () => {
//   const navLinkStyles = ({ isActive }) => {
//     return {
//       fontweight: isActive ? 'bold' : 'normal',
//       textDecoration: isActive ? 'underline' : 'none',
//     };
//   };
//   return (
//     <header>
//       <Logo />
//       <nav>
//         <NavLink style={navLinkStyles} to="/">
//           Accueil
//         </NavLink>
//         <NavLink style={navLinkStyles} to="/about">
//           A propos
//         </NavLink>
//       </nav>
//       <Outlet />
//     </header>
//   );
// };
// export default Header;
