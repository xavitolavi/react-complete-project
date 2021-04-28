import React, {useState} from 'react';
import './App.css';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { id: '1', title: 'Car Insurance', amount: 420.69, date: new Date (2021, 2, 28),},
  { id: '2', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12),},
  { id: '3', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14),},
  { id: '4', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
]

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  }



  return (
    <div className="App" >
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
