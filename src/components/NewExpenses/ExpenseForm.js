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

  //       setUserinput({
  //   ...userInput,
  //   enteredAmount:event.target.value
  //  })

  setUserinput((prevstatesnapshot)=>{
    return{
      ...prevstatesnapshot,
      enteredTitle:event.target.value
      
      //best way to use if we are dealing with previous state snapshot rather using it without a function inside a setuserinput call. here react will automatically executes the arroe function and give us the latest previous state snap that is needed to be object here which is our object inside the usestate.and then we just simply needs to return the updatation with the updated title
    }
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
