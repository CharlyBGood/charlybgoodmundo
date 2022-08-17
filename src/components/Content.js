import React from "react";
import ImgCenter from "../img/planetavacio.png";
import "../stylesheets/Content.css"

function Content() {
  return (
    <div className="img_container">
      <div className="decoration_words">
        <a className="item_1" href="./pages/music.html">
          #&#119070;music
        </a>
        <a className="item_2" href="./pages/collages.html">
          #artGallery
        </a>
        <a
          className="item_3"
          href="https://opensea.io/charly_bgood"
          target="_BLANK"
          rel="noreferrer"
        >
          #nft
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
          #devPortfolio
        </a>
        <a
          className="item_2"
          href="https://no-state-node.herokuapp.com/"
          target="_BLANK"
          rel="noreferrer"
        >
          #R3CuRSoS
        </a>        
      </div>
    </div>
  );
}

export default Content;
