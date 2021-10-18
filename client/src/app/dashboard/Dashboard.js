import React, { useContext, useEffect } from "react";
import TodoListComponent from "../apps/TodoListComponent";
import { Balance } from "./Balance";
import { Income } from "./Income";
import { Expenditures } from "./Expenditures";
import { Transactions } from "./Transactions";
import { MarketWatchWidget } from "../apps/MarketWatchWidget";
import { NewsWidget } from "../apps/NewsWidget";
import { PieWidget } from "./PieWidget";
import { Suggestions } from "./Suggestions";
import { SliderWidget } from "../apps/SliderWidget";
import { TransactionsContext } from "../../context/TransactionsState";

export const Dashboard = () => {
  const { getTransactions } = useContext(TransactionsContext);

  useEffect(() => {
    getTransactions();
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
        <MarketWatchWidget />
        <NewsWidget />
      </div>
      <div className="row">
        <Suggestions />
        <SliderWidget />
        <TodoListComponent />
      </div>
    </div>
  );
};

export default Dashboard;
