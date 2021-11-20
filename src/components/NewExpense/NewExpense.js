import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'

import './NewExpense.css'

const NewExpense = (props) => {
  const [isClicked, setIsClicked] = useState(false)

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }

    props.onAddExpense(expenseData)
    setIsClicked(false)
  }

  const handleClick = () => {
    setIsClicked(true)
  }

  const handleClickCancel = () => {
    setIsClicked(false)
  }

  return (
    <div className="new-expense">
      {!isClicked ? (
        <button onClick={handleClick}> Add New Expense </button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={handleClickCancel}
        />
      )}
    </div>
  )
}

export default NewExpense
