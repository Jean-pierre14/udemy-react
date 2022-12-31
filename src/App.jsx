import "./App.css";
import { useState } from "react";
import Expense from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 9400.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 299.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e23",
    title: "Toyota",
    amount: 203.67,
    date: new Date(2021, 3, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 680,
    date: new Date(2021, 5, 12),
  },
  {
    id: "ee4e",
    title: "Brabus Mercedes",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const AddExpenseDataHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <>
      <NewExpense onAddExpenseData={AddExpenseDataHandler} />

      <div className="wrapper">
        <Expense item={expenses} />
      </div>
    </>
  );
};

export default App;
