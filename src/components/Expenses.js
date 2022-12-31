import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

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

      {filteredExpenses.map((it) => (
        <ExpenseItem
          key={it.id}
          title={it.title}
          amount={it.amount}
          date={it.date}
        />
      ))}
      {/* <ExpenseItem
        key={props.item[0].id}
        title={props.item[0].title}
        amount={props.item[0].id}
        date={props.item[0].date}
      /> */}

      {/* <ExpenseItem
        key={props.item[1].id}
        title={props.item[1].title}
        amount={props.item[1].id}
        date={props.item[1].date}
      />

      <ExpenseItem
        key={props.item[2].id}
        title={props.item[2].title}
        amount={props.item[2].id}
        date={props.item[2].date}
      />

      <ExpenseItem
        key={props.item[3].id}
        title={props.item[3].title}
        amount={props.item[3].id}
        date={props.item[3].date}
      />
      <ExpenseItem
        key={props.item[4].id}
        title={props.item[4].title}
        amount={props.item[4].id}
        date={props.item[4].date}
      /> */}
    </>
  );
};

export default Expense;
