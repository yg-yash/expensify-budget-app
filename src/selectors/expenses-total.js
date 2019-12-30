export default expenses => {
  let expensesTotal = 0;
  let expenseCount = 0;
  expenses.forEach(expense => {
    expenseCount++;
    return (expensesTotal += expense.amount);
  });
  return { expensesTotal, expenseCount };
};
