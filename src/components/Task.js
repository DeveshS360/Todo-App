import React, { useState } from 'react'
import { Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material'

export const Task = (props) => {
    
    const { title, description, todoData, setTodoData, cardsList , idx} = props
    const card = cardsList[idx]
    const [isEdit, setIsEdit] = useState(false)


    const handleClick = () => {
        setIsEdit(prev => !prev)
    }

    const handleDelete = () => {
        delete cardsList[idx]
        setTodoData({...todoData})
    }
    const renderCardContent = () => {
        if(!isEdit) return (
            <>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom >
                    {title}
                </Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
                <CardActions>
                    <Button size='small' onClick={handleClick}>Edit Task</Button>
                    <Button size='small' onClick={handleDelete}>Delete</Button>
                </CardActions>
            </>
        )
        return (
            <>
                <TextField value={title} onChange={(e) => {card.title = e.target.value; setTodoData({...todoData})}}></TextField>
                <TextField value={description} onChange={(e) => {card.description = e.target.value; setTodoData({...todoData})}}></TextField>
                <Button variant='contained' size='small' color='primary' onClick={handleClick} >Confirm</Button>
            </>
        )
    }
    return (
        <Card variant='outline' sx={{border:'4px solid green', padding:'2rem', marginBottom: '2rem'}}>
            <CardContent sx={{width:'200px'}}>
                {
                    renderCardContent()
                }
            </CardContent>
        </Card>
    )
}