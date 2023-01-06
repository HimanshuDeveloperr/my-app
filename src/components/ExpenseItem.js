import './ExpenseItem.css';

function ExpenseItem(){

    return(
          
        <div className="expense-item">
       <div>Expense Item</div>
    <div className="expense-item__description">
        <h2>food</h2>
        <div className="expense-item__price">
            rs 10
        </div>
    </div>
    
   </div>
   

    )
            
}


export default ExpenseItem;