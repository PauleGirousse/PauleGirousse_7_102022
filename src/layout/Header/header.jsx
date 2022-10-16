import { NavLink } from 'react-router-dom';
import Logo from '../../components/Logo/logo';

export default function Header() {
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          <li className="home">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'activeLink' : undefined
              }
            >
              Accueil
            </NavLink>
          </li>
          <li className="about">
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive ? 'activeLink' : undefined
              }
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
