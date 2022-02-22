import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import { TransactionsProvider } from "./context/TransactionsState";
import { MarketDataProvider } from "./context/MarketDataState";
import { GoalsProvider } from "./context/GoalsState";
import { PlaidProvider } from "./context/PlaidState";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter basename="/Dashboard">
    <MarketDataProvider>
      <PlaidProvider>
        <TransactionsProvider>
          <GoalsProvider>
            <App />
          </GoalsProvider>
        </TransactionsProvider>
      </PlaidProvider>
    </MarketDataProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
