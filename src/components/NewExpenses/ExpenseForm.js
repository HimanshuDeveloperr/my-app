import React,{useState} from "react";
import "./EXpenseForm.css"

function ExpenseForm() {

  // const[enteredTitle,setenteredTitle]=useState('');
  
  // const[enteredAmount,setenteredAmount]=useState('')
  // const[enteredDate,setenteredDate]=useState('')

  const[userInput,setUserinput]=useState({
    enteredTitle:'',
    enteredAmount:'',
    enteredDate:''
  })
  

  function titleHandler(event){

   // setenteredTitle(event.target.value)
   setUserinput({
    ...userInput,
    enteredTitle:event.target.value
   })

  }
  function amountHandler(event){
    
        //setenteredAmount(event.target.value)

        setUserinput({
    ...userInput,
    enteredAmount:event.target.value
   })
    
      }
      function dateHandler(event){
        
           // setenteredDate(event.target.value)
           setUserinput({
    ...userInput,
    enteredDate:event.target.value
   })
        
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
