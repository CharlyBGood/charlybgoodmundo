import "../stylesheets/Music.css";

function Songlist(props) {

  const playAudio = () => {
    
    let player = document.getElementById("player");
    player.src = require(`../music/${props.song}.mp3`);
    player.load();
    player.play();
  };
  return <button onClick={playAudio}>{props.song}</button>;
}

export default Songlist;