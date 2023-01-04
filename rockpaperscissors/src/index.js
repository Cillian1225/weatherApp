import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppClass from "./Appclass";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppClass />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
