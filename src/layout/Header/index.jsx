import { Link } from "react-router-dom";
import logo from "../../components/logo";

export default function Header() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/A_Propos">A Propos</Link>
      </nav>
    </div>
  );
}
