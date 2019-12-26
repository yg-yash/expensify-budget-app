import React from "react";
import { connect } from "react-redux";
import { editExpense } from "../actions/expenses";
import { removeExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

const ExpenseEditPage = props => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push("/");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    expense: state.expenses.find(expense => {
      return expense.id === ownProps.match.params.id;
    })
  };
};
export default connect(mapStateToProps)(ExpenseEditPage);
