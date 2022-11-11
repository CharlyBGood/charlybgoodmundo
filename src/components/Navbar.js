import { NavLink } from "react-router-dom";
import "../stylesheets/Navbar.css";
import Logo from "../img/img-headerlogo.png";

function Navbar() {
  return (
    <nav className="topnav" id="nav-bar">
      <NavLink className="nav-link_1" to="/">
        <img className="header-logo" src={Logo} alt="charly bgood logo" />
      </NavLink>
      <NavLink className="nav-link_2" to="/Contact">
        contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
