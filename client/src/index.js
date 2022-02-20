import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import { TransactionsProvider } from "./context/TransactionsState";
import { MarketDataProvider } from "./context/MarketDataState";
import { GoalsProvider } from "./context/GoalsState";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter basename="/Dashboard">
    <MarketDataProvider>
      <TransactionsProvider>
        <GoalsProvider>
          <App />
        </GoalsProvider>
      </TransactionsProvider>
    </MarketDataProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
