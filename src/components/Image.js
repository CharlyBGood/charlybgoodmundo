import "../stylesheets/VisualArt.css";

function Image(props) {
  const openImg = () => {
    let imgModalOne;
    imgModalOne = document.getElementsByClassName("img-modal")[0];
    imgModalOne.style.display = "flex";
    let imgNew = document.createElement("img");
    imgModalOne.appendChild(imgNew);
    imgNew.src = require(`../img/img-${props.img}.${props.ext}`);
    imgNew.className = "modal-content";
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
      <div className="img-modal"></div>
    </>
  );
}

export default Image;
