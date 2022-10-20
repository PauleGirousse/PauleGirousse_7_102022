import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'activeLink' : undefined
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
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
      {/* <Outlet /> */}
    </>
    // <div>
    //   <Link to="/">Home</Link>
    //   <Link to="/About">A propos</Link>
    //   <Link to="*">Error</Link>
    // </div>
  );
};
