import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

declare global {
  interface Window {
    __INITIAL_PROPS__?: any;
    renderFromSaleForce?: (element: any) => void;
  }
}

// Initial data from server to the initial Page load,
let initialData;
console.log("process.env.REACT_APP_ENV", {
  env: process.env.REACT_APP_ENV,
});

const mountElement = document.getElementById("root");
const reactMountFn = ReactDOM.hydrate;

const renderApp = (mountElement: any) => {
  reactMountFn(<React.StrictMode>{<App />}</React.StrictMode>, mountElement);
};

window.renderFromSaleForce = (element: any) => renderApp(element);

if (process.env.REACT_APP_ENV === "development") {
  import("./app/lib/KYCReports/sampleInput/input_2").then((module) => {
    initialData = module.sampleKYCResponse;
    // Initialize your data here
    console.log(
      "Development environment: sampleKYCResponse initialized",
      initialData
    );
    renderApp(mountElement);
  });
} else {
  if (
    process.env.NODE_ENV === "production" &&
    typeof window !== "undefined" &&
    window.__INITIAL_PROPS__
  ) {
    try {
      initialData = JSON.parse(window.atob(window.__INITIAL_PROPS__));
      window.__INITIAL_PROPS__ = undefined;

      // Remove the script tag containing `window.__INITIAL_PROPS__` after hydration
      delete window.__INITIAL_PROPS__; // Clear the data from `window` object
      const initialPropsScript = document.getElementById("hydration-script");
      if (initialPropsScript) {
        initialPropsScript.remove(); // Remove the script tag from the DOM
      }
    } catch (error) {
      console.error("Error parsing initial props:", error);
    }
  }
  // renderApp(initialData);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
