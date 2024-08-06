import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'; 
import {useState} from 'react';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) =>
      {return [expense, ...prevExpenses]});
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}></Expenses>   
    </div>
  );
}

export default App;
