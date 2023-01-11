import React, { useState } from "react";

import ExpenseDetails from "./ExpenseDetails";

import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";
import Card from "../UI/Card";
function ExpenseItem(props) {
  
  const [title, setTitle] = useState(props.title);

  const clickHandlerr = () => {
    setTitle("calling settitle");
  };

  return (
    <Card className="expense-item" id={props.id}>
      <ExpenseDate date={props.date}></ExpenseDate>
      <h2>{title}</h2>

      <ExpenseDetails amount={props.amount} />

      

      <button onClick={clickHandlerr}>change title</button>
    </Card>
  );
}

export default ExpenseItem;
