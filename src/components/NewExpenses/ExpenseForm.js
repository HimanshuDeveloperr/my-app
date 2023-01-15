import React, { useState } from "react";
import "./EXpenseForm.css";

function ExpenseForm() {

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

  const submitHandler=(event)=>{
      event.preventDefault();

      const expenseData={
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate)
      }
      console.log(expenseData)
      setenteredTitle("")
      setenteredAmount("")
      setenteredDate("")
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} value={enteredTitle} name="name" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
            name="amount"
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" >Add Expense</button>
      </div>
    </form>
    
  );
}

export default ExpenseForm;
