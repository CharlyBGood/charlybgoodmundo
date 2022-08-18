import "../stylesheets/VisualArt.css";
import Jahjah from "../img/JAHJAH.gif";
import colored from "../img/colored.png";
import damma from "../img/damma1.gif";
import corazono from "../img/corazono2.gif";

function VisualArt() {
  return (
    <div className="main-container">
      <h1 className="collage-h1">cRaZy CollaGe World</h1>
      <div className="gy-container">
        <div className="gy-item gy-item-1">
          <img src={Jahjah} alt="handmade draw made a gif called moonman" />
        </div>
        <div className="gy-item gy-item-2">
          <img src={damma} alt="mythollogic Lillith into a collage gif" />
        </div>
        <div className="gy-item gy-item-3"></div>
        <div className="gy-item gy-item-4">
          <img src={colored} alt="handmade draw digitally painted" />
        </div>
        <div className="gy-item gy-item-5">
          <img src={corazono} alt="" />
        </div>
        <div className="gy-item gy-item-6"></div>
      </div>
      <button>
        <a
          href="https://opensea.io/charly_bgood"
          rel="noreferrer"
          target="_BLANK"
        >
          <i className="fa-solid fa-cannabis"></i>
          NFTs
          <i className="fa-solid fa-cannabis"></i>
        </a>
      </button>
    </div>
  );
}

export default VisualArt;
