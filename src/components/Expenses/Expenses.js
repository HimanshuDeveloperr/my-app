import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map((expenses) => (
        <ExpenseItem
        key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;

//-when we try to add anything without having keys. React renders this new item as the last item in that list of div and update all the items and replace their content such it again matches the order of the items in my array.Final result is correct here But from performance perspective it is not that great and it also leads to some bugs if expense items would be a state full item



//it helps react to tell and placed the updation or any changes we made as to where it should be placed and in which order it is like a identifier



//we should not use index as keys because it is not directly attached to the content of the item and can be same for the given item.