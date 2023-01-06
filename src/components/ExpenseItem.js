import './ExpenseItem.css';

function ExpenseItem(){
    const expenseDate=new Date(2023, 1, 6)
    const foodItem='banana';
    const cost=10;
    const LocationOfExpenditure='market'

    return(


          
        <div className="expense-item">
       <div>{expenseDate.toDateString()}</div> 
       {/* it returns us the date as a string */}
    <div className="expense-item__description">
        <h2>{foodItem}</h2>
        <h2>{LocationOfExpenditure}</h2>
        <div className="expense-item__price">
            rs{cost}
        </div>
    </div>
    
   </div>
   

    )
            
}


export default ExpenseItem;