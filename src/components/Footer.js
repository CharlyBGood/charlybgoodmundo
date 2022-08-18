import React from "react";
import "../stylesheets/Footer.css";

function Footer() {
  return (
    <footer className="smedia">
      <a href="https://github.com/CharlyBGood" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github"></i>
      </a>
      <a href="https://bit.ly/BGoodYouTube" target="_blank" rel="noreferrer">
        <i className="fab fa-youtube"></i>
      </a>      
      <a href="https://vimeo.com/charlybgood" target="_blank" rel="noreferrer">
        <i className="fab fa-vimeo-v"></i>
      </a>
      <a
        href="https://www.instagram.com/charlsbgood/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a
        href="https://twitter.com/CharlybGoodM"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-twitter"></i>
      </a>
    </footer>
  );
}

export default Footer;
