import React,{useState} from "react";

import ExpenseDetails from "./ExpenseDetails";

import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";
import Card from '../UI/Card';
function ExpenseItem(props) {

  const [title,setTitle]=useState(props.title);  
  // using array destructing as the usestate will return the array with one as var and one as updted var that we want to update.second element is a function we could call to update the variable.
  const clickHandlerr=()=>{
     setTitle('calling settitle')
  }

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
