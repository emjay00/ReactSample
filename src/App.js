import ExpenseItem from "./components/ExpenseItem";

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

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}>
      </ExpenseItem>
      <ExpenseItem title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}>
      </ExpenseItem>
      <ExpenseItem title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}>
      </ExpenseItem>
      <ExpenseItem title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}>
      </ExpenseItem>
    </div >
  );
}

export default App;
