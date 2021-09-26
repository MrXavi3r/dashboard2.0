import React, { createContext, useReducer } from "react";
import MarketDataReducer from "./MarketDataReducer";
import axios from "axios";

const initialState = {
  tickerSymbols: [],
  marketData: [],
  error: null,
  loading: true,
};

export const MarketDataContext = createContext(initialState);

export const MarketDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MarketDataReducer, initialState);

  // RETRIEVE MARKET DATA FROM MARKET DATA API
  async function getData() {
    try {
      const res = await axios.get("/api/v1/market_data/");

      dispatch({
        type: "GET_DATA",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "DATA_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  // ADD TICKER SYMBOL TO MARKET DATA API
  async function addTicker(ticker) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "/api/v1/market_data/tickers/",
        {ticker},
        config
      );

      dispatch({
        type: "ADD_TICKER",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "DATA_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  // GET TICKER SYMBOLS STORED IN MARKET DATA API
  // TICKERS SYMBOLS WILL BE USED TO FETCH STOCK/CRYPTO/FOREX MARKET PRICE DATA FROM TWELVE API
  async function getTickers() {
    try {
      const res = await axios.get("/api/v1/market_data/tickers", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch({
        type: "GET_TICKERS",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "DATA_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  // DELETE A TICKER FROM MARKET DATA API
  async function deleteTicker(id) {
    try {
      await axios.delete(`/api/v1/market_data/tickers/${id}`);
      dispatch({
        type: "DELETE_TICKER",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "DATA_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  return (
    <MarketDataContext.Provider
      value={{
        marketData: state.marketData,
        tickerSymbols: state.tickerSymbols,
        error: state.error,
        loading: state.loading,
        getData,
        addTicker,
        getTickers,
        deleteTicker,
      }}
    >
      {children}
    </MarketDataContext.Provider>
  );
};
