import './ExpenseForm.css'
import { useState } from 'react'


const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState(' ');
    const [enteredAmount, setEnteredAmount] = useState(' ');
    const [enteredDate, setEnteredDate] = useState(' ');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: ""
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     enteredTitle:event.target.value,
        //     ...userInput
        // })
        // setUserInput((prevState) => { return { ...prevState, enteredTitle: event.target.value 
        // } });-------> pass as function
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     enteredAmount: event.target.value,
        //     ...userInput
        // })
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     enteredDate: event.target.value,
        //     ...userInput
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);

        setEnteredTitle(" ");
        setEnteredAmount(" ");
        setEnteredDate(" ");
    };

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input
                    type="text"
                    value={enteredTitle}
                    onChange={titleChangeHandler} />
            </div></div>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input
                    value={enteredAmount}
                    type='number' min="0.01" step="0.01"
                    onChange={amountChangeHandler} />
            </div></div>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Date</label>
                <input
                    value={enteredDate}
                    type="date"
                    min="2019-01-01" max="2022-12-31"
                    onChange={dateChangeHandler} />
            </div></div>
        <div className='new-expense__actions'>
            <button type="submit">Add expense</button>
        </div>
    </form>
}
export default ExpenseForm;
