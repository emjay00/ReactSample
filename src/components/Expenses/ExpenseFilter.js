import React from 'react';

import './ExpenseFilter.css';

/*
1. Listen to changes(select element)
2. On that element trigger a function +
3. Pass pointer to that function to the element
4. Retrieve value from "event" -> event.target.value
5. Go to file where you want to get this data -> Expenses.js
6. Wrap return if needed to make as single element return here using div
7. Forward picked value to expenses.js-> in Expenses.js it is managed with State
8. Pass a function down to a component and that component calls that function when something happens
9. Pass a function down to ExpensesFilter, so that whenever new value is chosen it gets triggered?
10. Define function which you want to pass down-> Handler
11. Handler function can handle the date that is being passed from the other file
12. Pass a name(prop) to the other file in the reference element pointing to handler function
13. Back to sending file-> recieve props
14. set whatever data to  props.<name which points handler>(<data>)+
15. function which is recieved through that prop with the name accepts value which is being send
16. Now data is forwarded
17. Save data in state-> in Expenses.js -- import useState
18. initialise state with any chosen value
19. pass recieved data to set function --- setFilteredYEar(<data>) inside handler
20. Send a prop to child to set the initial year set in state as default value to appear
21. send a name pointing to the first/default value in state to child
22. in child ExpenseFilter, on select element set value from props -> Achieve 2 way binding

*/

const ExpensesFilter = (props) => {
  
  const dropdownChangeHandler=(event)=>{
  props.onChangeFilter(event.target.value)
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;