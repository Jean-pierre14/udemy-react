import "./App.css";

import Expense from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e23",
    title: "Toyota",
    amount: 200.67,
    date: new Date(2021, 3, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "ee4e",
    title: "Brabus Mercedes",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const AddExpenseDataHandler = (expense) => {
  console.log("In App.jsx");
  console.log(expense);
};

function App(props) {
  return (
    <>
      <NewExpense onAddExpenseData={AddExpenseDataHandler} />

      <div className="wrapper">
        <Expense item={expenses} />
      </div>
    </>
  );
}

export default App;
