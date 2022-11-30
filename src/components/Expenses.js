function Expense(props){
    return(
        <>
            <ExpenseItem
                key={props.item[0].id} 
                title={props.item[0].title} 
                amount={props.item[0].id} 
                date={props.item[0].date}/>
            <ExpenseItem
                key={props.item[1].id} 
                title={props.item[1].title} 
                amount={props.item[1].id} 
                date={props.item[1].date}/>
            <ExpenseItem
                key={props.item[2].id} 
                title={props.item[2].title} 
                amount={props.item[2].id} 
                date={props.item[2].date}/>
            
        </>
    )
}

export default Expense;