import "../stylesheets/VisualArt.css";
import Jahjah from "../img/JAHJAH.gif";
import colored from "../img/colored.png";
import damma from "../img/damma1.gif";
import corazono from "../img/corazono2.gif";
import girl from "../img/Girl.jpg";
import monster from "../img/elmonstruolunaysol.png";

let imgModalOne;

function VisualArt() {
  
  const openImg = () => {
    imgModalOne = document.getElementById("img-modal");  
    console.log("click!");
    imgModalOne.style.display = "flex";
    document.body.style.overflow = "hidden";
  };
  window.onclick = function (ev) {
    if (ev.target === imgModalOne) {
      imgModalOne.style.display = "none";
    }
  };
  return (
    <div className="main-container">
      <h1 className="collage-h1">cRaZy CollaGe World</h1>
      <div className="gy-container">
        <div className="gy-item gy-item-1" onClick={openImg}>
          <img
            className="gy-img"
            src={Jahjah}
            alt="handmade draw made a gif called moonman"
          />
        </div>
        <div className="gy-item gy-item-2" >
          <img
            className="gy-img"
            src={damma}
            alt="mythollogic Lillith into a collage gif"
          />
        </div>
        <div className="gy-item gy-item-3">
          <img className="gy-img" src={girl} alt="girls on a bus" />
        </div>
        <div className="gy-item gy-item-4">
          <img
            className="gy-img"
            src={colored}
            alt="handmade draw digitally painted"
          />
        </div>
        <div className="gy-item gy-item-5">
          <img className="gy-img" src={corazono} alt="" />
        </div>
        <div className="gy-item gy-item-6">
          <img
            className="gy-img"
            src={monster}
            alt="handmade draw edited on photoshop"
          />
        </div>
      </div>
      <div id="img-modal">
        <img
          className="modal-content"
          src={Jahjah}
          alt="handmade draw made a gif called moonman"
        />
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
