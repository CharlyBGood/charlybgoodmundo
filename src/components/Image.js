import "../stylesheets/VisualArt.css";

function Image(props) {
  let imgModalOne;

  const openImg = () => {
    imgModalOne = document.getElementsByClassName("img-modal")[0];
    console.log("click!");
    imgModalOne.style.display = "flex";
    let imgNew = document.createElement("img");
    imgModalOne.appendChild(imgNew);
    imgNew.src = require(`../img/img-${props.img}.${props.ext}`);
    imgNew.className = "modal-content new";
  };
  const closeModal = () => {
    console.log("Vale");
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
      <div className="img-modal" onClick={closeModal}></div>
    </>
  );
}

export default Image;
