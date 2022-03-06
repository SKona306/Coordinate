import { Container, Grid, Paper, CssBaseline} from '@mui/material'
import React, { useEffect } from 'react'
import './SplashPage.css'
import Header from './Header'
import Footer from './Footer'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'


const SplashPage = () => {
  const { currentUser } = useAuth()
  const navigate = useNavigate();

  if(currentUser) {
    navigate("/dashboard")
  }  

  return (
    <React.Fragment>
      <Header />
      <Container style={{minHeight: '50vh'}}>
        <div className='lines'>
          <h2 style={{textAlign: 'center', fontSize: '2.5rem', marginTop: '4rem'}}>How Coordinate Works</h2>
        </div>
        <div className='sub-title'>
          <h2 style={{textAlign: 'center', margin: '2rem', marginLeft: '1.5rem'}}>You are just four easy steps away from maximizing your relaxation!</h2>
        </div>
        <div className='steps-cards'>
          <Grid container spacing={2} style={{marginBottom: '4rem'}}>
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
      </Container>
      <div className='splash-page-main'>
        <CssBaseline />
        <Paper className='paperBackgroundImage' square>
          <Container className='centerElements' >
            <Paper style={{marginTop: '6rem', background: "linear-gradient(150deg, #046582, #6b73a9, #c17aa8, #f39189)"}}>
              <Container>
                <div className='description-card'>
                  <h1 style={{marginBottom: '0.5rem'}}>Our Mission</h1>
                  <h3 style={{width: '50%', marginTop: '0', textAlign: 'center'}}>We here at coordinate believe that life is stressful as is and you shouldn't have to worry about the details when you are one vacaction. Thats where we come in, help us help you make the most of your trip. We strive to create an experience that maximizes your total down time. </h3>
                </div>
              </Container>
            </Paper>
          </Container>
        </Paper>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default SplashPage