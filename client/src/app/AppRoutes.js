import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));

const AddTransaction = lazy(() => import("./transactions/AddTransaction"));
const TransactionList = lazy(() => import("./transactions/TransactionList"));
// const Typography = lazy(() => import("./transactions/Typography"));

const MarketWatch = lazy(() => import("./market-watch/manageSymbols"));

const News = lazy(() => import("./news/NewsData"));

const Goals = lazy(() => import("./goals/Goals"));

const Planner = lazy(() => import("./planner/Calendar"));

const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));

const Login = lazy(() => import("./user-pages/Login"));
const Register1 = lazy(() => import("./user-pages/Register"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />

        <Route path="/transactions/AddTransaction" component={AddTransaction} />
        <Route
          path="/transactions/TransactionList"
          component={TransactionList}
        />
        {/* <Route path="/transactions/typography" component={Typography} /> */}

        <Route path="/market-watch/manageSymbols" component={MarketWatch} />

        <Route path="/news/NewsData" component={News} />

        <Route path="/goals/Goals" component={Goals} />

        <Route path="/planner/Calendar.js" component={Planner} />

        <Route path="/user-pages/login-1" component={Login} />
        <Route path="/user-pages/register-1" component={Register1} />

        <Route path="/error-pages/error-404" component={Error404} />
        <Route path="/error-pages/error-500" component={Error500} />

        <Redirect to="/dashboard" />
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
