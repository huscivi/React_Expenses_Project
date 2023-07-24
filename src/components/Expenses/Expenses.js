import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import {useState} from 'react';
import ExpensesChart from './ExpensesChart';
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    } 

    let expenseContent = <p>No expenses found.</p>

    if (filteredExpenses.length > 0) {
        expenseContent = 
        filteredExpenses.map( item => 
            <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            key={item.id}
        />)
    }

    return (           
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses} />
                {expenseContent}
            </Card>
        </div>
    );
}

export default Expenses;