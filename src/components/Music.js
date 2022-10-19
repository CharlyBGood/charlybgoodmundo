import "../stylesheets/Music.css";
import playr from "../img/img-playrec.gif";
import Songlist from "./Songlist";
import { useRef, useState } from "react";
import { FaPlay, FaBackward, FaStop, FaForward, FaPause } from "react-icons/fa";
import Pianotec from "../music/Pianotec.mp3";

function Music(props) {
  const player = useRef();
  const volSlider = useRef();
  const [currentSong] = useState(Pianotec);
  // const {isPlaying, setIsPlaying} = useState(false);

  const playSong = () => {
    player.current.src = currentSong;
    console.log(currentSong);
    player.current.play();
  };

  const pauseSong = () => {
    player.current.pause();
  };

  const stopSong = () => {
    player.current.pause();
    player.current.currentTime = 0;
    console.log("stop");
  };

  const backSong = () => {
    console.log("back song");
  };

  const nextSong = () => {
    console.log("next song");
  };

  const maxMinVol = () => {
    console.log("hello bitch");
    volSlider.current.value = 0.5;
    console.log(volSlider.current.value)
    
  };
  const muteVol = () => {
    // player.volume = 0
  };

  return (
    <div className="player">
      <div className="player_one">
        <div className="radio">
          <img
            className="gif"
            src={playr}
            alt="record player gif with cartoons dancing"
          />
          <audio id="player" ref={player}></audio>
          <div id="controls">
            <div className="controls_wrapper">
              <p>{props.song}</p>
              <button onClick={backSong}>
                <FaBackward />
              </button>
              <button className="playBtn" onClick={playSong}>
                <FaPlay />
              </button>
              <button onClick={pauseSong}>
                <FaPause />
              </button>
              <button onClick={stopSong}>
                <FaStop />
              </button>
              <button onClick={nextSong}>
                <FaForward />
              </button>
              <div className="progress_section">
                <p className="durationStart">+</p>
                <div className="progress" id="progress"></div>
                <p className="durationEnd">-</p>
              </div>
              <div className="volume-onOff">
                <p>Volume</p>
                <button onClick={muteVol} className="on" id="volOnOff">
                  &#128266;
                </button>
              </div>
              <div className="volume">
                <span id="volDown">-</span>
                <input
                  type="range"
                  id="volumeSlider"
                  max="100"
                  value="50"
                  ref={volSlider}
                  onChange={maxMinVol}
                />
                <span id="volUp">+</span>
              </div>
            </div>
          </div>
        </div>
        <div id="songList">
          <p>Music by Charly BGood</p>
          <Songlist song="Pianotec" />
          <Songlist song="Popa America" />
          <Songlist song="Semiotico" />
          <Songlist song="tanHop" />
        </div>
      </div>
    </div>
  );
}

export default Music;
