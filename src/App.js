import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
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
  const addExpenseHandler = expense => {
    console.log("in APP.js");
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />

    </div >
  );
}

export default App;
