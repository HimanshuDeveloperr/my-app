
import React,{useState} from "react";

import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpenses/NewExpense";


const Dummyexpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    location: "market",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    location: "mall",
  },
  {
    id: "e3",

    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    location: "insurance company",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    location: "store",
  },
];


const App = ()=> {
const[expenses,setExpenses]=useState(Dummyexpenses)
  const addExpenseHandler=(expense)=>{

    setExpenses((Dummyexpenses)=>{
      return[expense,...Dummyexpenses]
    })
   console.log('in app.js')
   console.log(expense)
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      
  
<Expenses items={expenses} />



    
    </div>
  );
}

export default App;

