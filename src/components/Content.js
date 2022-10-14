import { NavLink } from "react-router-dom";
import ImgCenter from "../img/img-planetavacio.png";
import "../stylesheets/Content.css";

function Content() {
  return (
    <div className="img_container">
      <div className="decoration_words">
        <NavLink className="item item_1" to="./Music">
          #&#119070;Mu$ic
        </NavLink>
        <NavLink className="item item_2" to="/DevPortfolio">
          #dEv_PoRtfoLio
        </NavLink>
      </div>

      <img
        className="img"
        id="header-img"
        src={ImgCenter}
        alt="Charly BGood Logo"
      />

      <div className="decoration_words">
        <NavLink className="item item_3" to="/VisualArt">
          #Vi$uAls
        </NavLink>
      </div>
    </div>
  );
}

export default Content;
