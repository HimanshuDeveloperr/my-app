import React, { useState } from "react";
import "./EXpenseForm.css";

function ExpenseForm() {

  const submitHandler=(e)=>{
    e.preventDefault()
    const title=e.target.name.value;
    
    const amount=e.target.amount.value

   const details={
    title,
    amount
   }
   Show(details)
  }
  const Show=(details)=>{
    const ParentNode=document.querySelector("#store")
    const childhtml=`<li>${details.title}  ${details.amount}</li>`

    if(childhtml){
    ParentNode.innerHTML=ParentNode.innerHTML+childhtml;
    }
  }
  const [enteredTitle, setenteredTitle] = useState("");

  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");

  function titleHandler(event) {
    setenteredTitle(event.target.value);
  }
  function amountHandler(event) {
    setenteredAmount(event.target.value);
  }
  function dateHandler(event) {
    setenteredDate(event.target.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} name="name" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
            name="amount"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" >Add Expense</button>
      </div>
      <div>
      <ul id="store"></ul>
      </div>
    </form>
    
  );
}

export default ExpenseForm;
