import './ExpenseDate.css'


function ExpenseDate(props){

    /* toISOString used to convert Date to readable format */
    const month = props.date.toLocaleString('en-US', {month:'long'})
    const day = props.date.toLocaleString('en-US', { day:'2-digit'})
    const year = props.date.getFullYear()

    return (
        <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
    </div>
    )
  
}

export default ExpenseDate