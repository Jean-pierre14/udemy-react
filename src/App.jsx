
import './App.css';

import ExpenseItem from './components/ExpenseItem';
import Expense from './components/Expenses';

const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  return (
    <>
      <h3>Udemy courses</h3>
      <Expense item={expenses}/>
      <ExpenseItem
        key={expenses[0].id} 
        title={expenses[0].title} 
        amount={expenses[0].amount} 
        date={expenses[0].date}/>
      <ExpenseItem
        key={expenses[1].id} 
        title={expenses[1].title} 
        amount={expenses[1].amount} 
        date={expenses[1].date}/>
      <ExpenseItem
        key={expenses[2].id} 
        title={expenses[2].title} 
        amount={expenses[2].amount} 
        date={expenses[2].date}/>
    </>
  );
}

export default App;
