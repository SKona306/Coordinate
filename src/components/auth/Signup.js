import { Button, Container, Paper, TextField, Typography, Alert } from '@mui/material'
import React, {useRef, useState} from 'react'
import signupBG from '../../assets/images/signupBG.jpg'
import { useAuth } from '../../contexts/AuthContext';

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const {signup} = useAuth();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

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

  const handleSubmit = async() => {
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match')
    }
    
    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError('Failed to create an account')
    }
    setLoading(false)
  }

  return (
    <>
      <div className='sign-up-wrapper' style={styles.signupWrapper}>
        <Container style={{width: '35vw'}}>
          <Paper variant='outlined' style={{height: 'auto', maxWidth: '600px'}} className='sign-up-form'>
            <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', margin: '1rem'}}>
            <Typography variant='h1' pt={0} sx={{textAlign: 'center', fontSize: '5rem', margin: '2rem'}}>
              Sign Up
            </Typography>
            {error && <Alert severity="error" sx={{margin: '1rem', marginTop: '0'}}>{error}</Alert>}
              <form>
                <Typography variant='h6' sx={{marginBottom: '0.5rem'}}>
                  Email:
                </Typography>
                <TextField fullWidth required label='Email' type='email' inputRef={emailRef} sx={{marginBottom: '1rem'}}/>
                <Typography variant='h6' sx={{marginBottom: '0.5rem'}}>
                  Password:
                </Typography>
                <TextField fullWidth required label='Password' type='password' inputRef={passwordRef} sx={{marginBottom: '1rem'}}/>
                <Typography variant='h6' sx={{marginBottom: '0.5rem'}}>
                  Password Confirmation:
                </Typography>
                <TextField fullWidth required label='Confirm Password' type='password' inputRef={confirmPasswordRef} />
                <br />
                <Button variant='contained' color='secondary' onClick={handleSubmit} disabled={loading} sx={{backgroundColor: '#F39189', marginTop: '1rem', width: '100%'}}>Register</Button>
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