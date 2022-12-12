import React from "react";
import "../stylesheets/Footer.css";
import { FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="smedia">
      <i href="#!">Charly BGood</i>
      <a href="https://github.com/CharlyBGood" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://twitter.com/CharlybGoodM"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter />
      </a>
      <a href="https://bit.ly/BGoodYouTube" target="_blank" rel="noreferrer">
        <FaYoutube />
      </a>
    </footer>
  );
}

export default Footer;
