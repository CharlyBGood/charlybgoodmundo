import React from "react";
import ImgCenter from "../img/planetavacio.png";
import "../stylesheets/Content.css"

function Content() {
  return (
    <div class="img_container">
      <div class="decoration_words">
        <a class="item_1" href="./pages/music.html">
          #&#119070;music
        </a>
        <a class="item_2" href="./pages/collages.html">
          #artGallery
        </a>
        <a class="item_3" href="/" target="_BLANK">
          #blog
        </a>
      </div>
      <a href="/">
        <img
          class="img"
          id="header-img"
          src={ImgCenter}
          alt="Charly BGood Logo"
        />
      </a>
      <div class="decoration_words">
        <a class="item_1" href="./pages/developer.html">
          #devPortfolio
        </a>
        <a
          class="item_2"
          href="https://no-state-node.herokuapp.com/"
          target="_BLANK"
          rel="noreferrer"
        >
          #R3CuRSoS
        </a>
        <a
          class="item_3"
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
