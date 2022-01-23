import { Button, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Task } from './Task'

export const TodoList = (props) => {

    const { type, cardsList, todoData, setTodoData, formPath } = props

    const [isEdit, setIsEdit] = useState(false)
    const handleClick = () => {
        setIsEdit(prev => !prev)
    }



    const editOrTitle = () => {

        if(isEdit) return (
            <>
                <TextField 
                    value={type} 
                    onChange={(e) => {todoData[formPath].type = e.target.value; setTodoData({...todoData})}}
                >
                </TextField>
                <Button variant='contained' size='small' color='primary' onClick={handleClick} >Confirm</Button>
            </>
        )
        return (
            <Typography component='span' fontSize={25} color='black' align='center'>{type}
                <span>
                    &emsp;<Button 
                            variant='contained' 
                            size='small' 
                            color='primary' 
                            onClick={handleClick} >Edit Title</Button>
                </span>
                <hr />
            </Typography>
        )
    }
    return (
        <>
            
            {
                editOrTitle()
            }
            <Paper>
                {
                    cardsList && cardsList.length 
                    ? cardsList.map((card, idx) => {
                        return <Task 
                                    key={idx} 
                                    title={card.title} 
                                    description={card.description} 
                                    todoData={todoData} 
                                    setTodoData={setTodoData}
                                    cardsList={cardsList}
                                    idx={idx}
                                />
                    })
                    : null
                }
            </Paper>
        </>
    )
}