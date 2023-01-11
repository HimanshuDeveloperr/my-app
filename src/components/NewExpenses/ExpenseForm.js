import React from "react";
import "./EXpenseForm.css"

function ExpenseForm() {

  function inputHandler(event){
console.log(event)//object given to us bydefault when the event takes place
    console.log(event.target.value)

  }

  return(
    <form>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type='text' onChange={inputHandler}/>
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input type='number' min='0.01' step='0.01' />
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input type='date' min='2019-01-01' max='2022-12-31' />
      </div>
    </div>
    <div className='new-expense__actions'>
      <button type='submit'>Add Expense</button>
    </div>
  </form>


  )
  
}

export default ExpenseForm;
