import { Add } from '@mui/icons-material'
import { Button, Checkbox, Container, FormControl, FormControlLabel, FormGroup, FormLabel, Paper, Typography } from '@mui/material'
import React from 'react'
import { toDoDatabase } from './StaticDatabase'

const TodoList = (props) => {

  const handleChecked = (index) => {
    
  }

  const handleAddTodoClick = () => {
    props.handleAddToDoItemClick(true)
  }

  return (
    <>
    <Container sx={{width: '75vw'}}>
      <Paper elevation={5}>
        <Typography variant='h1' sx={{fontSize: '2rem', textAlign: 'center', margin:'1rem', fontFamily: " 'Quicksand', sans-serif", fontWeight: '500'}}>
          Pre-Travel Todo's
        </Typography>
        <hr style={{width: '50vw' }}/>
        <Container sx={{display: 'flex', flexDirection: 'column', width: '50vw'}}>
          {toDoDatabase.map((item, index) => {
            return (
              <div key={index} >
                <FormControl component="fieldset">
                <FormGroup aria-label="position" column>
                  <FormControlLabel
                    value="top"
                    control={<Checkbox />}
                    label={item.label + ' | ' + item.details + ' | ' + "Due by: " + item.date}
                    labelPlacement="end"
                    onChange={(index) => handleChecked(index)}
                    disabled={item.completed}
                  />
                </FormGroup>
              </FormControl>
              </div>
            )
          })}
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Button 
              variant='contained' 
              onClick={handleAddTodoClick}
              fullWidth
              endIcon={<Add />}
              sx={{alignItems: 'center', maxWidth: '30vw', margin:'1rem'}}
              >Add Todo items</Button>
          </div>
        </Container>
      </Paper>
    </Container>
    </>
  )
}

export default TodoList