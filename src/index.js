/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";


import rootReducer from "./reducers";
import reportWebVitals from "./reportWebVitals";

const logger = ({ dispatch, getState }) => (next) => (action) => {
  // logger code

  if (typeof action !== "function") {
    console.log("ACTION_TYPE =", action.type);
  }
  next(action);
};

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// console.log("store", store);

console.log("STATE", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
