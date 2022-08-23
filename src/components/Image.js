import "../stylesheets/VisualArt.css";
// import Jahjah from "../img/img-jahjah.gif";

function Image(props) {
  let imgModalOne;
  const openImg = () => {
    imgModalOne = document.getElementById("img-modal");
    console.log("click!");
    imgModalOne.style.display = "flex";
    document.body.style.overflow = "hidden";
  };
  window.onclick = function (ev) {
    if (ev.target === imgModalOne) {
      imgModalOne.style.display = "none";
    }
  };

  return (
    <>
      <div className="gy-item gy-item-1" onClick={openImg}>
        <img
          className="gy-img"
          src={require(`../img/img-${props.img}.${props.ext}`)}
          alt="digital art by Charly BGood"
        />
      </div>
      <div id="img-modal">
        <img
          className="modal-content"
          src={require(`../img/img-${props.img}.${props.ext}`)}
          alt="digital art by Charly BGood"
        />
      </div>
    </>
  );
}

export default Image;
