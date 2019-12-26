import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

store.dispatch(
  addExpense({ description: "Water Bill", amount: 100, createdAt: 2000 })
);
store.dispatch(
  addExpense({ description: "Gas Bill", amount: 200, createdAt: 1000 })
);
store.dispatch(
  addExpense({
    description: "Rent",
    amount: 10900,
    note: "Hello",
    createdAt: 1000
  })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.querySelector("#root"));
