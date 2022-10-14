import "../stylesheets/VisualArt.css";

function Image(props) {
  const openImg = () => {
    let imgModalOne = document.getElementsByClassName("img-modal")[0];
    let imgBase = document.getElementsByClassName("gy-img")[0];
    imgModalOne.style.display = "flex";
    imgBase.classList.add("open");
    
    if (imgBase.classList.contains("open")) {
      let imgNew = document.createElement("img");
      imgModalOne.appendChild(imgNew);
      imgNew.src = require(`../img/img-${props.img}.${props.ext}`);
      imgNew.className = "modal-content";
    }
  };

  const closeImg = (e) => {
    let imgModalOne = document.getElementsByClassName("img-modal")[0];
    let imgBase = document.getElementsByClassName("gy-img")[0];
    let imgNew = document.getElementsByClassName("modal-content")
    imgModalOne.style.display = "none";
    imgBase.classList.remove("open");
    imgModalOne.remove(imgNew);
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
      <div className="img-modal" onClick={closeImg}></div>
    </>
  );
}

export default Image;
