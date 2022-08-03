import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./app/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <div className="UpperPlate"></div>
    <App />
  </Provider>
);
