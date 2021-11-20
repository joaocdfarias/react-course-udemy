import React from 'react'
import './ExpensesList.css'

import ExpenseItem from '../Expenses/ExpenseItem'

export const ExpensesList = (props) => {
  return (
    <div>
      <ul className="expenses-list">
        {!props.items.length ? (
          <h2 className="expenses-list__fallback"> No expenses found. </h2>
        ) : (
          props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </ul>
    </div>
  )
}
