import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expense = (props) => {
  const [filter, setFilter] = useState("2020");

  const filterHandler = (selectYear) => {
    setFilter(selectYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filter;
  });

  return (
    <>
      <ExpensesFilter selected={filter} onSelect={filterHandler} />

      <ExpensesList items={filteredExpenses} />
    </>
  );
};

export default Expense;
