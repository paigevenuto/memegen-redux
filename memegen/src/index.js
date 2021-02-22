import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";

const INITIAL_STATE = { memes: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_MEME":
      return { ...state, memes: [...state.memes, { ...action.meme }] };
    case "DEL_MEME":
      let memes = state.memes.filter((meme) => meme.memeId !== action.targetId);
      return {
        ...state,
        memes,
      };
    default:
      return state;
  }
}

const store = createStore(
  rootReducer,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
