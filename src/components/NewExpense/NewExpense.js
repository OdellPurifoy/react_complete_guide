import { useState } from 'react';
import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setShowForm(false)
    }

    const toggleShowFormHandler = (event) => {
        setShowForm(true);
    }

    const canelFormButton = () => {
        setShowForm(false)
    }

    return(
        <div className='new-expense'>
            {!showForm && (
            <button onClick={toggleShowFormHandler}>Add New Expense</button>
            )}
            {showForm && (
            <NewExpenseForm 
                onSaveExpenseData={saveExpenseDataHandler} 
                onCancel={canelFormButton}
            />
            )}
        </div>
    )
}

export default NewExpense;