import { Container, Paper, Typography, Button } from '@mui/material';
import React from 'react'
import { itineraryItemsDatabase } from './StaticDatabase'



const Itinerary = (props) => {
  const addItineraryItem = props.handleAddItineraryItems
  const database = itineraryItemsDatabase;

  const handleAddItineraryClick = () => {
    addItineraryItem(true);
  }



  return (
    <React.Fragment>
      <Container>
        <Paper elevation={0} sx={{margin: '1rem'}}>
        <Container>
          <Paper elevation={1}>
            <Typography variant='h1' sx={{fontSize: '2rem', textAlign: 'center', margin:'1rem'}}>
              Your Itinerary
            </Typography>
            <Button 
              variant='contained' 
              onClick={handleAddItineraryClick}
              sx={{alignItems: 'center'}}
              >Add Iteneray Items</Button>
          </Paper>
        </Container>
      </Paper>
      </Container>
    </React.Fragment>
  )
}

export default Itinerary