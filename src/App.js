import React, { useState } from 'react'
import './index.scss'
import { TODO_DATA } from './constants/Tododata'
import { Grid } from '@mui/material'
import { TodoList } from './components/TodoList'

export const App = () => {

  const [todoData, setTodoData] = useState(TODO_DATA)

  const renderTodoData = () => {

      return (
        <Grid container spacing={12}>
          {
            Object.keys(todoData).map(item => {
              const renderObj = todoData[item]
              return (
                    <Grid item key={item}>
                          <TodoList 
                            type={renderObj.type} 
                            todoData={todoData} formPath={item} 
                            setTodoData={setTodoData} 
                            cardsList={renderObj.cardsList}
                          /> 
                    </Grid>
              )
            })
          }
        </Grid>
      )
    }

  return (
    <>
      <h1 className='appTitle'>Welcome to Todo List App</h1>
      {
        todoData && Object.keys(todoData).length ? renderTodoData()
        : null
      }

    </>
  )
}

