import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify</h1>

    <NavLink to="/" activeClassName="is-active" exact={true}>
      Home
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Expense Help
    </NavLink>
  </header>
);

export default Header;
