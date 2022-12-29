import { useState } from "react";
import "../stylesheets/VisualArt.css";

export function Image({ title, ext }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [isHidden, setIsHidden] = useState(true);

  const openImg = (e) => {
    setImageSrc(e.target.src);
    setIsHidden(!isHidden);
  };

  const closeImg = (e) => {
    setIsHidden(!isHidden);
  };
  return (
    <>
      <div className="gy-item gy-item-1" onClick={openImg}>
        <img
          className="gy-img"
          src={require(`../img/img-${title}.${ext}`)}
          alt="digital art by Charly BGood"
        />
      </div>
      <div
        className={isHidden ? "img-modal" : "img-modal-open"}
        onClick={closeImg}
      >
        <img
          className="modal-content"
          src={imageSrc}
          alt="digital art by Charly BGood"
        />
      </div>
    </>
  );
}
