import { NavLink } from 'react-router-dom';
import Logo from '../../components/Logo/logo';

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <nav>
        <ul>
          <li className="home">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'activeLink' : 'a')}
            >
              Accueil
            </NavLink>
          </li>
          <li className="about">
            <NavLink
              to="/About"
              className={({ isActive }) => (isActive ? 'activeLink' : 'a')}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
