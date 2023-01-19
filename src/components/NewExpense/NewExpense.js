import './NewExpense.css'
import ExpenseForm from './ExpenseForm';


//sending data from child to parent---> pass pointer to a function
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
    };
    return (<div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>)
}

export default NewExpense;