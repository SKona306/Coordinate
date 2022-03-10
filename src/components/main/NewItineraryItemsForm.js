import { Button, Container, Paper, TextareaAutosize, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import MainHeader from './MainHeader';
import { itineraryItemsDatabase } from './StaticDatabase';

const NewItineraryItemsForm = (props) => {
  const setFormVisible = props.formVisibleControl;

  const [formValues, setFormValues] = useState([{label: '', details: '', day: '', time: '' }])


  const handleFormSubmit = (event) => {
    event.preventDefault()
    formValues.forEach((element) => {
      itineraryItemsDatabase.push(element);
    });
    setFormVisible(false)
  }

  const handleChange = (i, e) => {
    let newFormValues = [...formValues]; 
    newFormValues[i][e.target.name] = e.target.value; 
    setFormValues(newFormValues);
  }
    
  const addFormFields = () => {
    setFormValues([...formValues, {label: '', details: '', day: '', time: '' }])
  }

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
  }

  const handleHomeClick = () => {
    setFormVisible(false)
  }

  return (
    <React.Fragment>
      <MainHeader />
      <Paper elevation={0}>
        <Container>
          <div className='center-paper' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem'}}>
            <Paper>
              <Typography variant='h1' sx={{fontSize: '2rem', textAlign: 'center'}}>
                Itinerary Form
              </Typography>
              <Typography variant='h6' sx={{textAlign:'center'}}>
                Add all your itinerary items below:
              </Typography>
              <Container>
                <form onSubmit={handleFormSubmit}>
                  {formValues.map((element, index) => (
                    <div className="form-inline" key={index}>
                      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <TextField label='Label' sx={{margin:'1rem'}} required onChange={e => handleChange(index, e)} ></TextField>
                        <div style={{margin:'1rem'}}>
                          <TextareaAutosize sx={{margin:'1rem'}} placeholder='Write details here...' minRows={3.3} required onChange={e => handleChange(index, e)} ></TextareaAutosize>
                        </div>
                        <TextField sx={{margin:'1rem'}} type='date' label='Day' defaultValue='2021-05-22' required onChange={e => handleChange(index, e)}></TextField>
                        <TextField sx={{margin:'1rem'}}  type='Time' label='time' defaultValue='07:30' required onChange={e => handleChange(index, e)} ></TextField>
                      {
                        index ? 
                          <Button variant='contained' color='error' sx={{height:'3rem', marginTop: '1.2rem'}} onClick={() => removeFormFields(index)}>Remove</Button> 
                        : null
                      }
                      </div>
                    </div>
                  ))}
                  <div className='form-buttons' style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <Button variant='contained' color='primary' onClick={() => addFormFields()}>Add Field</Button>
                    <Button variant='contained' color='secondary' type='submit'>Submit Itinerary</Button>
                  </div>
                </form>
              </Container>
            </Paper>
          </div>
          <div className='home-button' style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <Button variant='contained' color='success' onClick={handleHomeClick}>Dashboard</Button>
          </div>
        </Container>
      </Paper>
    </React.Fragment>
  )
}

export default NewItineraryItemsForm