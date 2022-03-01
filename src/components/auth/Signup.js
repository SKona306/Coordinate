import { Button, Container, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import signupBG from '../../assets/images/signupBG.jpg'

const Signup = () => {

  const styles = {
    signupWrapper: {
      backgroundImage: `url(${signupBG})`,
      backgroundSize: '100%',
      objectFit: 'cover',
      display: 'flex', 
      flexDirection: 'row', 
      height: '100vh',
      width: '100vw',
      justifyContent:'center', 
      alignItems: 'center'
    }
  }
  return (
    <>
      <div className='sign-up-wrapper' style={styles.signupWrapper}>
        <Container style={{width: '35vw'}}>
          <Paper variant='outlined' style={{height: 'auto', maxWidth: '600px'}} className='sign-up-form'>
            <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', margin: '1rem'}}>
            <Typography variant='h4' mt={0} pt={0} sx={{textAlign: 'center'}}>
              <h1>Sign Up</h1>
            </Typography>
              <form>
                <Typography variant='h6' sx={{marginBottom: '0.5rem'}}>
                  Email:
                </Typography>
                <TextField fullWidth required label='Email' sx={{marginBottom: '1rem'}}/>
                <Typography variant='h6' sx={{marginBottom: '0.5rem'}}>
                  Password:
                </Typography>
                <TextField fullWidth required label='Password' sx={{marginBottom: '1rem'}}/>
                <Typography variant='h6' sx={{marginBottom: '0.5rem'}}>
                  Password Confirmation:
                </Typography>
                <TextField fullWidth required label='Confirm Password' />
                <br />
                <Button variant='contained' color='secondary'  sx={{backgroundColor: '#F39189', marginTop: '1rem', width: '100%'}}>Register</Button>
            </form>
          </div>
          </Paper>
          <div className='account'>
            <Typography variant='subtitle1' sx={{textAlign: 'center', color: 'black'}}>
              Already have an account? Log In
            </Typography>
          </div>
        </Container>
        
      </div>
    </>
  )
}

export default Signup