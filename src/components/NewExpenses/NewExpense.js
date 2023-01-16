import React,{useState} from 'react';


import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
 const[isEditing,setisEditing]= useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setisEditing(false)
  };

  const setisEditingHandler=()=>{
    setisEditing(true)
  }

  const stopEditingHandler=()=>{
    setisEditing(false)
  }
  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={setisEditingHandler}>Add new expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;