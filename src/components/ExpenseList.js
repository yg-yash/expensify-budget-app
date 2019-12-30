import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import ExpenseSummary from "./ExpensesSummary";
import selectExpenses from "../selectors/expenses";

const ExpenseList = props => (
  <div>
    <h1>{props.expenses.length < 1 ? "No Expenses" : "Expense List"}</h1>
    <ExpenseSummary />
    {props.expenses.map(expense => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
