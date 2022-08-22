import { NavLink } from "react-router-dom";
import ImgCenter from "../img/planetavacio.png";
import "../stylesheets/Content.css";

function Content() {
  return (
    <div className="img_container">
      <div className="decoration_words">
        <NavLink className="item item_1" to="./Music">
          #&#119070;music
        </NavLink>
        <NavLink className="item item_2" to="/VisualArt">
          #cRaZyCollaGe$
        </NavLink>
      </div>
      <NavLink to="/">
        <img
          className="img"
          id="header-img"
          src={ImgCenter}
          alt="Charly BGood Logo"
        />
      </NavLink>
      <div className="decoration_words">
        <NavLink className="item item_1" to="/DevPortfolio">
          #dev_Portfolio
        </NavLink>
        <a
          className="item item_2"
          href="https://opensea.io/charly_bgood"
          target="_BLANK"
          rel="noopener noreferrer"
        >
          #nft
        </a>
      </div>
    </div>
  );
}

export default Content;
