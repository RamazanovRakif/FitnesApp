import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./Css/Common.scss";
import "./Css/Reset.scss";

import "./Css/Color.scss";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.min.css";
// import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/context";

ReactDOM.render(
  <React.StrictMode>

      <UserProvider>
        <App />
      </UserProvider>
  
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
