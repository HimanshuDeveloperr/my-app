

import ExpenseItem from "./components/ExpenseItem";




function App() {
    return (
      <div>
        <h2>Let's get started!</h2>
        <ExpenseItem></ExpenseItem>
      </div>
    );
  }
  
  export default App;
  
  //we can use an html element in the js file because of the feature called jsx.
  // abd because of the all the transformation that is being handled by the react behind the scenes before giving it to the browser

  //always remember lowercase elements are built in html elements and uppercase are custom html elements .