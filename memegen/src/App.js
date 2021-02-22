import "./App.css";
import Meme from "./Meme";
import MemeForm from "./MemeForm";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const memes = useSelector((store) => store.memes);
  const dispatch = useDispatch();

  function addMeme(meme) {
    dispatch({ type: "ADD_MEME", meme });
  }

  function delMeme(targetId) {
    dispatch({ type: "DEL_MEME", targetId });
  }

  const memeList = memes.map((meme) => (
    <Meme
      memeID={meme.memeId}
      key={meme.memeId}
      imageUrl={meme.imageUrl}
      topText={meme.topText}
      bottomText={meme.bottomText}
      delMeme={() => delMeme(meme.memeId)}
    />
  ));

  return (
    <div className="App">
      <MemeForm addMeme={addMeme} />
      <div className="memeList">{memeList}</div>
    </div>
  );
}

export default App;
