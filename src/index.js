import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Routes from "./utils/Routes";

//! import css
import "./assets/css/index.css";

//! import Content Provider
import { ContentProvider } from "./utils/ContentProvider";

ReactDOM.render(
  <React.StrictMode>
    <ContentProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ContentProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
