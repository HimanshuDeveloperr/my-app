import React,{useState} from "react";
import "./EXpenseForm.css"

function ExpenseForm() {

  const[enteredTitle,setenteredTitle]=useState('');
  //as the value will be alkways in a string format whether it is a no or anything.
  const[enteredAmount,setenteredAmount]=useState('')
  const[enteredDate,setenteredDate]=useState('')

  function titleHandler(event){
console.log(event)//object given to us bydefault when the event takes place
    setenteredTitle(event.target.value)

  }
  function amountHandler(event){
    
        setenteredAmount(event.target.value)
    
      }
      function dateHandler(event){
        
            setenteredDate(event.target.value)
        
          }

  return(
    <form>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type='text' onChange={titleHandler} />
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input type='number' min='0.01' step='0.01' onChange={amountHandler} />
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateHandler} />
      </div>
    </div>
    <div className='new-expense__actions'>
      <button type='submit'>Add Expense</button>
    </div>
  </form>


  )
  
}

export default ExpenseForm;
