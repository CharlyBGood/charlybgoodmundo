import "../stylesheets/SinglePages.css";
import { NavLink } from "react-router-dom";
// import ImgComputer from "../img/img-computer.png";

function WebApps() {
  return (
    <>
    <p className="p_description">
        Fun web apps and projects made in pure <code>Vanilla Javascript</code>.
      </p>
      <div className="img_container">
        <div className="decoration_words">
          <a
            className="item item_1"
            href="https://charlybgood.github.io/webAppsJS/musicPlayerApp/index.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            #musicPlayer
          </a>
          <a
            className="item item_2"
            href="https://charlybgood.github.io/webAppsJS/paintItBlack/index.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            #paintItBlack
          </a>
          <a
            className="item item_1"
            href="https://charlybgood.github.io/webAppsJS/synthMySoul/index.html"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            #synthMySoul
          </a>
          <a
            className="item item_2"
            href="https://charlybgood.github.io/webAppsJS/photoEffectApp/index.html"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            #photoEffect
          </a>
        </div>
      </div>
      <button className="btn-back">
        <NavLink to="/DevPortfolio">&#129092; back</NavLink>
      </button>
    </>
  );
}

export default WebApps;
