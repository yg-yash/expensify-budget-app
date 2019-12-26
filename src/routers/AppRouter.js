import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import ExpenseDashBoardPage from "../components/ExpenseDashboardPage";
import ExpenseAddPage from "../components/ExpenseAddPage";
import ExpenseEditPage from "../components/ExpenseEditPage";
import ExpenseHelpPage from "../components/ExpenseHelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashBoardPage} exact={true} />
        <Route path="/create" component={ExpenseAddPage} />
        <Route path="/edit/:id" component={ExpenseEditPage} />
        <Route path="/help" component={ExpenseHelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
