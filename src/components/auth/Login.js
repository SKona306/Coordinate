import { Button, Container, Paper, TextField, Typography, Alert } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import React, {useRef, useState} from 'react'
import signupBG from '../../assets/images/signupBG.jpg'
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  let navigate = useNavigate();

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
      alignItems: 'center',
      margin: '0',
      padding: '0'
    }
  }

  const handleSubmit = async() => {
    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      if(currentUser) navigate('/dashboard')
    } catch {
      setError('Failed to login')
    }
    setLoading(false)
  }
  if(currentUser) {
    navigate("/dashboard")
  }
  
  return (
    <>
      <div className='sign-up-wrapper' style={styles.signupWrapper}>
        <Container style={{width: '35vw'}}>
          <Paper variant='outlined' style={{height: 'auto', maxWidth: '600px', minWidth:'450px'  , maxHeight: '650px', }} className='sign-up-form'>
            <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', margin: '1rem'}}>
            <Typography variant='h1' pt={0} sx={{textAlign: 'center', fontSize: '5rem', margin: '2rem'}}>
              Login
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
                <br />
                <Button variant='contained' color='secondary' onClick={handleSubmit} disabled={loading} sx={{backgroundColor: '#F39189', marginTop: '1rem', width: '100%'}}>Log in</Button>
            </form>
            <Typography variant='subtitle1' sx={{textAlign: 'center', color: 'black'}}>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </Typography>
          </div>
          </Paper>
        </Container>
        
      </div>
    </>
  )
}

export default Login