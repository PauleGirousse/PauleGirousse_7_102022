import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo/logo";

export default function Header() {
  return (
    <div className="App-header">
      <Logo />
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
