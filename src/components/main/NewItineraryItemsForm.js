import { Button, Container, Paper, TextareaAutosize, TextField, Typography, IconButton } from '@mui/material';
import React, { useState } from 'react'
import MainHeader from './MainHeader';
import { itineraryItemsDatabase } from './StaticDatabase';
import { RemoveCircle, Add, AddCircle } from '@mui/icons-material';

const NewItineraryItemsForm = (props) => {
  const setFormVisible = props.formVisibleControl;

  const [inputValues, setInputValues] = useState([{label: '', details: '', day: '', time: '' }])

  const handleChangeInput = (index, event) => {
    const values = [...inputValues];
    values[index][event.target.name] = event.target.value;
    setInputValues(values)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValues)
  }

  const handleAddFields = () => {
    setInputValues([...inputValues, {label: '', details: '', day: '', time: '' }])
  }

  const handleRemoveFields = (index) => {
    const values = [...inputValues];
    values.splice(index, 1);
    setInputValues(values);
  }

  const handleHomeClick = () => {
    setFormVisible(false)
  }

  return (
    <React.Fragment>
      <MainHeader />
      <Paper elevation={0}>
        <Container>
          <Paper elevation={1} sx={{margin: '1rem'}}>
            <Typography variant='h1' fontWeight='bolder' sx={{fontSize: '2rem', textAlign: 'center'}}>
              Itinerary Form
            </Typography>
            <Typography variant='h6' sx={{textAlign: 'center'}}>
              Add itinerary items below
            </Typography>
            <hr style={{maxWidth: '60vw'}}/>
            <form onSubmit={handleSubmit} >
            {inputValues.map((inputField, index) => (
            <div key={index} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <TextField 
                name="label"
                label="Label"
                variant='filled'
                sx={{margin: '1rem' }}
                value={inputField.label} 
                onChange={event => handleChangeInput(index, event)}/>
              <div className='styles-textarea' >
                <TextareaAutosize 
                  name="details"
                  placeholder='Enter details here...'
                  variant='filled'
                  minRows={3.3}
                  value={inputField.details} 
                  onChange={event => handleChangeInput(index, event)}/>
              </div>
              <TextField 
                name="day"
                variant='filled'
                type='date'
                sx={{margin: '1rem' }}
                value={inputField.day} 
                onChange={event => handleChangeInput(index, event)}/>
              <TextField 
                name="time"
                variant='filled'
                sx={{margin: '0.3rem' }}
                type='time'
                value={inputField.time} 
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
      </Paper>
    </React.Fragment>
  )
}

export default NewItineraryItemsForm