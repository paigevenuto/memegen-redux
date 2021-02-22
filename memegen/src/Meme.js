import "./Meme.css";
import React from "react";

function Meme({ topText, bottomText, imageUrl, memeId, delMeme }) {
  return (
    <div className="meme" id={memeId}>
      <img className="memeImg" src={imageUrl} alt="meme template" />
      <span>{topText}</span>
      <span>{bottomText}</span>
      <div className="delBtn" onClick={delMeme}>
        X
      </div>
    </div>
  );
}

export default Meme;
