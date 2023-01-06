import './ExpenseItem.css';

function ExpenseItem(props){
   
    

    return(


          
        <div className="expense-item">
       <div>{props.date.toDateString()}</div> 
       {/* it returns us the date as a string */}
    <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <div className="expense-item__price">
            rs{props.amount}
        </div>
    </div>
    
   </div>
   

    )
            
}


export default ExpenseItem;