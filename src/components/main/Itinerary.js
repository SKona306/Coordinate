import { Container, Paper, Typography, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import React from 'react'
import { itineraryItemsDatabase } from './StaticDatabase'
import { ExpandMore } from '@mui/icons-material';



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
          <Paper elevation={1} >
            <Typography variant='h1' sx={{fontSize: '2rem', textAlign: 'center', margin:'1rem', fontFamily: " 'Quicksand', sans-serif", fontWeight: '500'}}>
              Your Itinerary
            </Typography>
            <hr  style={{width: '50vw'}}/> 
            {database.map((item, index) => {
            return (
              <div key={index} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Accordion  sx={{width:'40vw', }}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                <Typography sx={{width: '33%', flexShrink: 0}}>{item.label}</Typography>
                <Typography sx={{fontWeight:'bold'}}>Date: {item.day}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {item.details}
                  </Typography>
                  <Typography m={1} sx={{fontWeight: 'bold'}}>
                    Time: {item.time}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            )
          })}
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Button 
              variant='contained' 
              onClick={handleAddItineraryClick}
              fullWidth
              sx={{alignItems: 'center', maxWidth: '30vw', margin:'1rem'}}
              >Add Iteneray Items</Button>
          </div>
          </Paper>
        </Container>
      </Paper>
      </Container>
    </React.Fragment>
  )
}

export default Itinerary