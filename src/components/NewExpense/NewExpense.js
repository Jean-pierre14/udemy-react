import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const ExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpenseData(expenseData);
    setNewExp(false);
  };
  const [newExp, setNewExp] = useState(false);
  const handlerNewExp = () => {
    setNewExp(true);
  };
  const handlerNewExpCancel = () => {
    setNewExp(false);
  };

  return (
    <div className="new-expense">
      {!newExp ? (
        <button type="button" onClick={handlerNewExp}>
          Add new Expense
        </button>
      ) : (
        <ExpenseForm
          onExpenseData={ExpenseDataHandler}
          onCancel={handlerNewExpCancel}
        />
      )}
    </div>
  );
};

export default NewExpense;
