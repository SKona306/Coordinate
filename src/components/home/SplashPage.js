import { Container, Grid, Paper} from '@mui/material'
import React from 'react'
import './SplashPage.css'


const SplashPage = () => {

  return (
    <React.Fragment>
      <Container>
        <div className='lines'>
          <h2 style={{textAlign: 'center', fontSize: '2.5rem', margin: '0.5rem'}}>How Coordinate Works</h2>
        </div>
        <div className='sub-title'>
          <h2 style={{textAlign: 'center', margin: '2rem'}}>You are just four easy steps away from relaxation!</h2>
        </div>
        <div className='steps-cards'>
          <Grid container spacing={2}>
          <Grid item xs={3}>
            <h1 style={{color: '#F39189'}}>Step One</h1>
            <p>If you have an upcoming trip or are looking to plan a future trip, sign up for coordinate and let us take care of the details.</p>
          </Grid>
          <Grid item xs={3}>
            <h1 style={{color: '#BB8082'}}>Step Two</h1>
            <p>Add your trip to your account and provide us with the important information like itinerary, pre-travel todos, or even activity suggestions</p>
          </Grid>
          <Grid item xs={3}>
            <h1 style={{color: '#6E7582'}}>Step Three</h1>
            <p>Invite your friends and family to your trip, once they sign up they will be able to see all the trip info.</p>
          </Grid>
          <Grid item xs={3}>
            <h1 style={{color: '#046582'}} >Step Four</h1>
            <p>Sit back and Relax we will take care of it from here!</p>
          </Grid>
        </Grid>
        </div>
        <div className='mission-statement'>
          <Paper elevation={0}>
            <h1 style={{textAlign: 'center'}}>Our Mission</h1>
          </Paper>
        </div>
      </Container>
    </React.Fragment>
  )
}

export default SplashPage