import React, { createContext, useReducer } from "react";
import TransactionsReducer from "./TransactionsReducer";
import axios from "axios";

const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

export const TransactionsContext = createContext(initialState);

export const TransactionsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TransactionsReducer, initialState);

  //GET TRANSACTION FROM TRANSACTIONS API
  async function getTransactions() {
    try {
      const res = await axios.get("/api/v1/transactions");

      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  // DELETE TRANSACTION FROM TRANSACTIONS API
  async function deleteTransaction(id) {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);

      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  //ADD TRANSACTION TO TRANSACTIONS API
  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        `/api/v1/transactions/`,
        transaction,
        config
      );

      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        addTransaction,
        deleteTransaction,
        getTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
