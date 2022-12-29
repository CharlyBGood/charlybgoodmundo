import "../stylesheets/DevPortfolio.css";
import "../stylesheets/Content.css";
import { NavLink } from "react-router-dom";
import ImgCenter from "../img/img-planetavacio.png";
import { FaArrowCircleLeft } from "react-icons/fa";

function DevPortfolio() {
  return (
    <>
      <div className="img_container">
        <div className="decoration_words">
          <NavLink className="item item_1" to="./WebApps">
            #funJsApps
          </NavLink>
          <NavLink className="item item_2" to="./ReactProjects">
            #reactProjects
          </NavLink>
          <img className="img" src={ImgCenter} alt="Charly BGood Logo" />
          <NavLink className="item item_1" to="./SinglePages">
            #webDesign
          </NavLink>
        </div>
      </div>
      <button className="btn-back">
        <NavLink to="/">
          <FaArrowCircleLeft />
        </NavLink>
      </button>
    </>
  );
}

export default DevPortfolio;
