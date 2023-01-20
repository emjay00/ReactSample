import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet paper',
    amount: 45.98,
    date: new Date(2020, 4, 14)
  },
  {
    id: 'e2',
    title: 'TV',
    amount: 834.46,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car insurance',
    amount: 256.17,
    date: new Date(2020, 4, 14)
  },
  {
    id: 'e4',
    title: 'Wooden table',
    amount: 300,
    date: new Date(2021, 5, 12)
  }
];



const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


  const addExpenseHandler = expense => {
    setExpenses(prevExpense => {
      return [expense, ...prevExpense]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />

    </div >
  );
}

export default App;
