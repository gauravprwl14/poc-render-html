import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// @ts-ignore
let initialData;
if (typeof window !== "undefined") {
  // @ts-ignore
  initialData = window.__INITIAL_PROPS__ || {};
}

console.log("initialData", { initialData });

const mountElement = document.getElementById("root");
const reactMountFn =
  mountElement?.childElementCount === 0 ? ReactDOM.render : ReactDOM.hydrate;

reactMountFn(
  <React.StrictMode>
    <App data={initialData} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
