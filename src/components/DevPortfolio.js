import "../stylesheets/DevPortfolio.css";
import { NavLink } from "react-router-dom";
import ImgComputer from "../img/img-computer.png";

function DevPortfolio() {
  return (
    <div className="img_container">
      <div className="decoration_words">
        <a
          className="item item_1"
          href="/"
          rel="noopener noreferrer"
          target="_blank"
        >
          #webApps
        </a>
        <NavLink className="item item_2" to="/">
          #reactProjects
        </NavLink>

        <img
          className="img_center item_3"
          src={ImgComputer}
          alt="Charly BGood Logo"
        />
        <a
          className="item item_2"
          href="https://estarsiempreseguros.com.ar/"
          target="_BLANK"
          rel="noopener noreferrer"
        >
          #clientWebsite
        </a>
        <a
          className="item item_1"
          href="https://charlybgood.github.io/freecodecamp/"
          target="_BLANK"
          rel="noopener noreferrer"
        >
          #freeCodeCamp
        </a>
      </div>
    </div>
  );
}

export default DevPortfolio;
