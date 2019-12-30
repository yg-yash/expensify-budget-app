import React from "react";
import { connect } from "react-redux";
import expenseTotal from "../selectors/expenses-total";
import numeral from "numeral";

const ExpensesSummaryComponent = props => {
  const { expensesTotal, expenseCount } = expenseTotal(props.expenses);
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formattedExpenseTotal = numeral(expensesTotal / 100).format("$0.0.00");
  return (
    <div>
      <p>
        Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal}{" "}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { expenses: state.expenses };
};

export default connect(mapStateToProps)(ExpensesSummaryComponent);
