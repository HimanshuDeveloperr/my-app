import React from "react";

import ExpenseDetails from "./ExpenseDetails";

import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";
import Card from '../UI/Card';
function ExpenseItem(props) {
  const clickHandler=()=>{
    console.log(props.id)


    const ele = document.getElementById(props.id)
    // while(ele.length > 0){
      ele.parentNode.removeChild(ele)
    // }
   

    
  }
  return (
    <Card className="expense-item" id={props.id}>
      
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails amount={props.amount} />

    
      <button onClick={clickHandler}>delete</button>
    </Card>
  );
}

export default ExpenseItem;
