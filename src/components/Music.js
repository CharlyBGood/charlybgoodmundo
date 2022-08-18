import "../stylesheets/Music.css";
import GifImg from "../img/playrec.gif";

function Music() {
  return (
    <main className="video_gallery">
      <div id="Songs" className="music-container">
        <img className="gif" src={GifImg} alt="charlybgood gif" />
        <div className="links">
          <a
            href="https://soundcloud.com/charly-bgood"
            rel="noreferrer"
            target="_BLANK"
          >
            #soundCloud
          </a>
          <a
            href="https://charlybgood1.bandcamp.com/"
            rel="noreferrer"
            target="_BLANK"
          >
            #bandCamp
          </a>
        </div>
      </div>
    </main>
  );
}

export default Music;
