import React from "react";
import ReactDOM from "react-dom";
import "./style/index.scss";
import App from "./containers/App";
import { makeStore, StoreContext } from "./redux/store";

const store = makeStore();

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById("root")
);
