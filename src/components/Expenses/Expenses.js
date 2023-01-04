import { useState } from 'react'
import ExpensesList from "./ExpensesList";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filteredExpenses = props.items.filter(item => {
    return item.date.getFullYear().toString() === filteredYear
  })

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilterChangeHandler={filterChangeHandler} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;