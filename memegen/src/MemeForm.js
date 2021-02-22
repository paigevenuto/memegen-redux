import React from "react";
import useFields from "./useFields";
import { v4 as uuid } from "uuid";

function MemeForm({ addMeme }) {
  const [formData, handleChange, resetForm] = useFields({
    topText: "",
    bottomText: "",
    imageUrl: "",
    memeId: uuid(),
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const meme = {
      topText: formData.topText,
      bottomText: formData.bottomText,
      imageUrl: formData.imageUrl,
      memeId: uuid(),
    };
    addMeme(meme);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="imageUrl">Url</label>
      <input
        name="imageUrl"
        type="text"
        id="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
        required
      />
      <label htmlFor="topText">Top Text</label>
      <input
        name="topText"
        type="text"
        id="topText"
        value={formData.topText}
        onChange={handleChange}
        required
      />
      <label htmlFor="bottomText">Bottom Text</label>
      <input
        name="bottomText"
        type="text"
        id="bottomText"
        value={formData.bottomText}
        onChange={handleChange}
        required
      />
      <button>Add Meme!</button>
    </form>
  );
}

export default MemeForm;
