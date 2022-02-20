import React, { useContext, useEffect } from "react";
import TodoListComponent from "../apps/TodoListComponent";
import { Balance } from "./Balance";
import { Income } from "./Income";
import { Expenditures } from "./Expenditures";
import { Transactions } from "./Transactions";
// import { MarketWatchWidget } from "../apps/MarketWatchWidget";
import TradingView from "../apps/TradingView";
import { NewsWidget } from "../apps/NewsWidget";
import { PieWidget } from "./PieWidget";
import { Suggestions } from "./Suggestions";
import { SliderWidget } from "../apps/SliderWidget";
import { TransactionsContext } from "../../context/TransactionsState";
import { GoalsContext } from "../../context/GoalsState";

export const Dashboard = () => {
  const { getTransactions } = useContext(TransactionsContext);
  const { getGoals } = useContext(GoalsContext);

  useEffect(() => {
    getTransactions();
    getGoals();
  }, []);

  return (
    <div className="bg-light">
      <div className="row">
        <Balance />
        <Income />
        <Expenditures />
      </div>
      <div className="row">
        <PieWidget />
        <Transactions />
      </div>
      <div className="row ">
        {/* <MarketWatchWidget /> */}
        <TradingView />
        <NewsWidget />
      </div>
      <div className="row">
        <SliderWidget />
        <Suggestions />
      </div>
      <TodoListComponent />
    </div>
  );
};

export default Dashboard;
