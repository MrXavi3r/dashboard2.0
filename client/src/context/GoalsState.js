import React, { createContext, useReducer, useContext } from "react";
import GoalsReducer from "./GoalsReducer";
import axios from "axios";
import { TransactionsContext } from "./TransactionsState";

const initialState = {
  goals: {},
  error: null,
  loading: true,
};

export const GoalsContext = createContext(initialState);

export const GoalsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GoalsReducer, initialState);

  //GET GOALS FROM GOALS ENDPOINT
  async function getGoals() {
    try {
      const goalData = await axios.get("/api/v1/goals");

      const goalsPayload = {
        goals: goalData.data.data,
      };

      dispatch({
        type: "GET_GOALS",
        payload: goalsPayload,
      });
    } catch (error) {
      dispatch({
        type: "GOALS_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  //UPDATE A PROPERTY ON GOALS OBJECT
  // goal = {property: value}
  async function updateGoal(id, goal) {
    try {
      const res = await axios.put(`/api/v1/goals/${id}`, goal);

      dispatch({
        type: "UPDATE_GOAL",
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: "GOALS_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  return (
    <GoalsContext.Provider
      value={{
        goals: state.goals,
        error: state.error,
        loading: state.loading,
        getGoals,
        updateGoal,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};
