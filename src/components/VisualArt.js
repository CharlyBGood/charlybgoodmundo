import "../stylesheets/VisualArt.css";
// import Jahjah from "../img/img-jahjah.gif";
// import colored from "../img/colored.png";
// import damma from "../img/damma1.gif";
// import corazono from "../img/corazono2.gif";
// import girl from "../img/Girl.jpg";
// import monster from "../img/elmonstruolunaysol.png";
import Image from "../components/Image";

// let imgModalOne;

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
        <Image img="girl" ext="jpg" />
      </div>
      {/* <div id="img-modal">
        <img
          className="modal-content"
          src={Jahjah}
          alt="handmade draw made a gif called moonman"
        />
      </div> */}

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
