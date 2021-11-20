import React, { useState } from 'react'

import ExpensesFilter from '../ExpenseFilter/ExpensesFilter'

import Card from '../UI/Card'
import './Expenses.css'
import { ExpensesList } from '../ExpensesList/ExpensesList'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses
