import ImgCenter from "../img/planetavacio.png";
import "../stylesheets/Content.css";

function Content() {
  return (
    <div className="img_container">
      <div className="decoration_words">
        <a className="item_1" href="./Music">
          #&#119070;music
        </a>
        <a className="item_2" href="/VisualArt">
          #vi$ual_Art
        </a>
      </div>
      <a href="/">
        <img
          className="img"
          id="header-img"
          src={ImgCenter}
          alt="Charly BGood Logo"
        />
      </a>
      <div className="decoration_words">
        <a className="item_1" href="./pages/developer.html">
          #dev_Portfolio
        </a>
        <a
          className="item_2"
          href="https://opensea.io/charly_bgood"
          target="_BLANK"
          rel="noreferrer"
        >
          #nft
        </a>
      </div>
    </div>
  );
}

export default Content;
