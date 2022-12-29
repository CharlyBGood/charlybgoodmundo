import "../stylesheets/VisualArt.css";
import { Image } from "../components/Image";

function VisualArt() {
  return (
    <div className="main-container">
      <h1 className="collage-h1">cRaZy CollaGe World</h1>
      <div className="gy-container">
        <Image title="jahjah" ext="gif" />
        <Image title="corazono2" ext="gif" />
        <Image title="colored" ext="png" />
        <Image title="monstruo" ext="png" />
        <Image title="damma1" ext="gif" />
        <Image title="bitcoinfire" ext="gif" />
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
