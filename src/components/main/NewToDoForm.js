import { Add, AddCircle, RemoveCircle } from '@mui/icons-material';
import { Button, Container, IconButton, Paper, TextareaAutosize, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import MainHeader from './MainHeader';
import { addTodoItems } from './StaticDatabase';

const NewToDoForm = (props) => {
  const setTodoFormVisible = props.todoFormVisibleControl;
  const [inputValues, setInputValues] = useState([{label: '', description: '', date: '', completed: false}, {label: '', description: '', date: '', completed: false}, {label: '', description: '', date: '', completed: false}])

  const handleChangeInput = (index, event) => {
    const values = [...inputValues];
    values[index][event.target.name] = event.target.value;
    setInputValues(values)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodoItems(inputValues);
    setTodoFormVisible(false);
  }

  const handleAddFields = () => {
    setInputValues([...inputValues, {label: '', description:'', day: '', completed: false}])
  }

  const handleRemoveFields = (index) => {
    const values = [...inputValues];
    values.splice(index, 1);
    setInputValues(values);
  }

  const handleHomeClick = () => {
    setTodoFormVisible(false)
  }

  return (
    <>
      <MainHeader />
        <Container>
          <Paper elevation={5} sx={{margin: '1rem'}}>
            <Typography variant='h1' fontWeight='bolder' fontFamily="'Quicksand', sans-serif" sx={{fontSize: '2rem', textAlign: 'center'}}>
              Pre-Travel Todo's
            </Typography>
            <Typography variant='h6' fontFamily="'Quicksand', sans-serif" sx={{textAlign: 'center'}}>
              Add todo items below
            </Typography>
            <hr style={{maxWidth: '60vw'}}/>
            <form onSubmit={handleSubmit} >
            {inputValues.map((inputField, index) => (
            <div key={index} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <TextField 
                name="label"
                label="Label"
                variant='filled'
                required
                sx={{margin: '1rem' }}
                value={inputField.label} 
                onChange={event => handleChangeInput(index, event)}/>
              <div className='styles-textarea' >
                <TextareaAutosize
                  name="details"
                  placeholder='Enter details here...'
                  variant='filled'
                  minRows={3.3}
                  required
                  value={inputField.details} 
                  onChange={event => handleChangeInput(index, event)}/>
              </div>
              <TextField 
                name="day"
                variant='filled'
                type='date'
                required
                sx={{margin: '1rem' }}
                value={inputField.day} 
                onChange={event => handleChangeInput(index, event)}/>
              <IconButton onClick={() => handleRemoveFields(index)} disabled={index === 0}>
                <RemoveCircle />
              </IconButton>
              <IconButton onClick={() => handleAddFields()}>
                <AddCircle />
              </IconButton>
            </div>
          ))}
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} >
            <Button variant='contained' color='primary' type='submit' endIcon={<Add />} sx={{margin: '1rem', textAlign: 'center' }} onClick={handleSubmit}>Add Items</Button>
            <Button variant='contained' color='secondary' onClick={handleHomeClick}>Dashboard</Button>
          </div>
          </form>
          </Paper>
        </Container>
    </>
  )
}

export default NewToDoForm