import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
        setIsEditing(false);
    }

    const showFormHandler = (event) => {
        setIsEditing(true);
    }

    const cancelFormHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
            {!isEditing && (<button onClick={showFormHandler}>Add new expense</button>)}
            {isEditing && (<ExpenseForm onCancel={cancelFormHandler} onSaveExpenseData={saveExpenseDataHandler}/>)}
        </div>
    )
}

export default NewExpense
