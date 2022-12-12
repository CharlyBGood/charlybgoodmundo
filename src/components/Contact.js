import "../stylesheets/Contact.css";
import {
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaVimeo,
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <div className="main-form">
        <form
          action="POST"
          className="form-container"
          onSubmit={(e) => e.preventDefault()}
        >
          <label>Contact me!</label>
          <input type="text" name="name" placeholder="Name" />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Send me a message"
          ></textarea>
          <input type="email" name="email" placeholder="E-mail" />
          {/* <input type="submit" name="send" value="Send" /> */}
          <button>Send</button>
        </form>
        <div className="smedia-contact">
          <a
            href="https://github.com/CharlyBGood"
            target="_blank"
            rel="noreferrer"
          >
            {/* <i className="fa-brands fa-github"></i> */}
            <FaGithub />
          </a>
          <a
            href="https://bit.ly/BGoodYouTube"
            target="_blank"
            rel="noreferrer"
          >
            {/* <i className="fab fa-youtube"></i> */}
            <FaYoutube />
          </a>
          <a
            href="https://vimeo.com/charlybgood"
            target="_blank"
            rel="noreferrer"
          >
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
        </div>
      </div>
    </>
  );
}

export default Contact;
