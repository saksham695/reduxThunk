import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from "redux";
import { counterReducer } from "./store/reducer";
import { Provider } from "react-redux";
import logger from "redux-logger";

const myLogger = (store) => (next) => (action) => {
  return next(action);
};

const secondMiddleware = (store) => (next) => (action) => {
  return next(action);
};

const capAtTen = (store) => (next) => (action) => {
  const counter = store.getState();
  if (counter === 10) {
    return next({ type: "DECREMENT" });
  }
  return next(action);
};

const store = createStore(
  counterReducer,
  applyMiddleware(myLogger, secondMiddleware, capAtTen, logger)
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
