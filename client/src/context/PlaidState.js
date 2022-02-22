import React, { createContext, useReducer } from "react";
import axios from "axios";
import PlaidReducer from "./PlaidReducer";

const initialState = {
  publicToken: null,
  accessToken: null,
  transactions: [],
  error: null,
};

export const PlaidContext = createContext(initialState);

export const PlaidProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PlaidReducer, initialState);

  // CREATE_LINK_TOKEN
  async function createLinkToken() {
    const res = await axios.post("/api/v1/plaid/create_link_token");

    try {
      dispatch({
        type: "CREATE_LINK_TOKEN",
        payload: res.data.link_token,
      });
    } catch (error) {
      dispatch({
        type: "PLAID_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  // GET ACCESS TOKEN
  async function getAccessToken(token) {
    const res = await axios.post("/api/v1/plaid/get_access_token", {
      publicToken: token,
    });
    console.log(res);

    try {
      dispatch({
        type: "GET_ACCESS_TOKEN",
        payload: res.data.access_token,
      });
    } catch (error) {
      dispatch({
        type: "PLAID_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  // GET TRANSACTIONS
  async function plaidTransactions(token) {
    const res = await axios.post("/api/v1/plaid/transactions", {
      accessToken: token,
    });
    console.log(res);

    try {
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.transactions,
      });
    } catch (error) {
      dispatch({
        type: "PLAID_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  return (
    <PlaidContext.Provider
      value={{
        publicToken: state.publicToken,
        accessToken: state.accessToken,
        transactions: state.transactions,
        createLinkToken,
        plaidTransactions,
        getAccessToken,
      }}
    >
      {children}
    </PlaidContext.Provider>
  );
};
