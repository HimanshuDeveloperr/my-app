
import Expenses from "./components/Expenses";



function App() {
  const expenses = [
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

  return (
    <div>
      <h2>Let's get started!</h2>
      {/* loope through the expensex array of objects using map method inside the {curly braces} and change the {} after arrow to () as because of this return takes palce important note.and then created the custom html with the required attributes */}
      {/* <Card className="expenses">

      {expenses.map((e) => (

      
        <ExpenseItem
          title={e.title}
          amount={e.amount}
          date={e.date}
          location={e.location}
        ></ExpenseItem>

     

      
          
      
      
      ))}
      </Card> */}

<Expenses items={expenses} />


    
    </div>
  );
}

export default App;

