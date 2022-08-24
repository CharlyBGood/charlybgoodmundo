import "../stylesheets/VisualArt.css";
import Image from "../components/Image";

function VisualArt() {
  return (
    <div className="main-container">
      <h1 className="collage-h1">cRaZy CollaGe World</h1>
      <div className="gy-container">
        <Image img="jahjah" ext="gif" />
        <Image img="corazono2" ext="gif" />
        <Image img="colored" ext="png" />
        <Image img="monstruo" ext="png" />
        <Image img="damma1" ext="gif" />
        <Image img="bitcoinfire" ext="gif" />
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
