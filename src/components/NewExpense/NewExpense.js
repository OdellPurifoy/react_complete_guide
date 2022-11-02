import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = () => {
    return(
        <div className='new-expense'>
            <form>
                <NewExpenseForm />
            </form>
        </div>
    )
}

export default NewExpense;