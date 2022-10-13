import "../stylesheets/SinglePages.css";
// import ImgComputer from "../img/img-computer.png";

function WebApps() {
  return (
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
        {/* <img
          className="img_center item_3"
          src={ImgComputer}
          alt="Charly BGood Logo"
        /> */}
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
  );
}

export default WebApps;
