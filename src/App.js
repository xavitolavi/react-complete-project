import './App.css';
import Expenses from './components/expenses/Expenses';

function App() {

  const expenses = [
    { id: '1', title: 'Car Insurance', amount: 420.69, date: new Date (2021, 2, 28),},
    { id: '2', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12),},
    { id: '3', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14),},
    { id: '4', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  ]

  return (
    <div className="App">
      <h1>React App</h1>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
