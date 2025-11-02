import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
