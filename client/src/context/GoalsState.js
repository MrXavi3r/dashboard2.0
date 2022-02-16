import React, { createContext, useReducer } from "react";
import GoalsReducer from "./GoalsReducer";
import axios from "axios";

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
      const res = await axios.get("/api/v1/goals");

      dispatch({
        type: "GET_GOALS",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "GOALS_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  //UPDATE A PROPERTY ON GOALS OBJECT
  async function updateGoal(id, goal) {
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };

    console.log(goal);
    try {
      const res = await axios.put(`/api/v1/goals/${id}`, goal);
      console.log(res.data);

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
