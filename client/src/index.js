import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import { TransactionsProvider } from "./context/TransactionsState";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter basename="/Dashboard">
    <TransactionsProvider>
      <App />
    </TransactionsProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
