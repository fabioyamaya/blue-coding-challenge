import React from "react";
import ReactDOM from "react-dom";

export default function Lightbox({ url, onArrowClick, handleClose }) {
  return ReactDOM.createPortal(
    <div>
      <div style={{ textAlign: "right" }} onClick={() => handleClose()}>
        X
      </div>
      <div className="lighbox-container">
        <div onClick={() => onArrowClick("prev")}>{"<"}</div>
        <img src={url} />
        <div onClick={() => onArrowClick("next")}>{">"}</div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
