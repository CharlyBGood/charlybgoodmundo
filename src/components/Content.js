import { NavLink } from "react-router-dom";
import ImgCenter from "../img/planetavacio.png";
import "../stylesheets/Content.css";

function Content() {
  return (
    <div className="img_container">
      <div className="decoration_words">
        <NavLink className="item_1" to="./Music">
          #&#119070;music
        </NavLink>
        <NavLink className="item_2" to="/VisualArt">
          #vi$ual_Art
        </NavLink >
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
        <NavLink className="item_1" to="./pages/developer.html">
          #dev_Portfolio
        </NavLink>
        <NavLink
          className="item_2"
          to="https://opensea.io/charly_bgood"
          target="_BLANK"
          rel="noreferrer"
        >
          #nft
        </NavLink>
      </div>
    </div>
  );
}

export default Content;
