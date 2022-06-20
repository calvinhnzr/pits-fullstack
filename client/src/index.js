import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import "./styles/index.css";
import "./styles/fonts.css";

import "./fonts/Roboto/Roboto-Regular.ttf";
import "./fonts/Roboto/Roboto-Italic.ttf";
import "./fonts/Roboto/Roboto-Bold.ttf";
import "./fonts/Roboto/Roboto-BoldItalic.ttf";
import "./fonts/Roboto/Roboto-Black.ttf";
import "./fonts/Roboto/Roboto-BlackItalic.ttf";
import "./fonts/Roboto/Roboto-Light.ttf";
import "./fonts/Roboto/Roboto-LightItalic.ttf";
import "./fonts/Roboto/Roboto-Medium.ttf";
import "./fonts/Roboto/Roboto-MediumItalic.ttf";
import "./fonts/Roboto/Roboto-Thin.ttf";
import "./fonts/Roboto/Roboto-ThinItalic.ttf";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
