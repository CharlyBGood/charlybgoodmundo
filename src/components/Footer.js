import React from "react";
import "../stylesheets/Footer.css";
import {
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaVimeo,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="smedia">
      <a href="https://github.com/CharlyBGood" target="_blank" rel="noreferrer">
        {/* <i className="fa-brands fa-github"></i> */}
        <FaGithub />
      </a>
      <a href="https://bit.ly/BGoodYouTube" target="_blank" rel="noreferrer">
        {/* <i className="fab fa-youtube"></i> */}
        <FaYoutube />
      </a>
      <a href="https://vimeo.com/charlybgood" target="_blank" rel="noreferrer">
        <FaVimeo />
      </a>
      <a
        href="https://www.instagram.com/charlsbgood/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://twitter.com/CharlybGoodM"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter />
      </a>
    </footer>
  );
}

export default Footer;
