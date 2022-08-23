import "../stylesheets/Music.css";
import GifImg from "../img/img-playrec.gif";
import ReactPlayer from "react-player";
import audioFile from "../audio/maconia.wav";

function Music() {
  return (
    <main className="video_gallery">
      <div id="Songs" className="music-container">
        <img className="gif" src={GifImg} alt="charlybgood gif" />
        <ReactPlayer
          className="player"
          width="50%"
          height="2em"
          url={audioFile}
          playing={false}
          controls
          config={{
            file: {
              attributes: {
                controlsList: "nodownload",
              },
            },
          }}
        />
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
