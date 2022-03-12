import { Button, Container, Paper, TextField, Typography, Alert } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import React, {useRef, useState, useEffect} from 'react'
import { useAuth } from '../../contexts/AuthContext';
import './AuthStyles.css'


const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  let navigate = useNavigate();


  useEffect(() => {
    if(currentUser) {
      navigate("/dashboard")
    }
  })
  

  const handleSubmit = async() => {
    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError('Failed to login')
    }
    setLoading(false)
  }

  
  
  return (
    <>
      <div className='sign-up-wrapper' >
        <Container style={{width: '35vw'}}>
          <Paper 
            variant='outlined' 
            sx={{height: 'auto', maxWidth: '600px', minWidth:'450px'  , maxHeight: '650px', }} 
            >
            <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', margin: '1rem'}}>
            <Typography 
              variant='h1' 
              pt={0} 
              sx={{textAlign: 'center', fontSize: '3rem', margin: '2rem'}}
              >
              Login
            </Typography>
            {error && <Alert severity="error" sx={{margin: '1rem', marginTop: '0'}}>{error}</Alert>}
              <form>
                <TextField 
                  fullWidth 
                  required 
                  label='Email' 
                  type='email' 
                  inputRef={emailRef} 
                  sx={{marginBottom: '1rem'}}
                  />
                <TextField 
                  fullWidth 
                  required 
                  label='Password' 
                  type='password' 
                  inputRef={passwordRef} 
                  sx={{marginBottom: '1rem'}}
                  />
                <br />
                <Button 
                  variant='contained' 
                  color='secondary' 
                  onClick={handleSubmit} 
                  disabled={loading} 
                  sx={{backgroundColor: '#F39189', marginTop: '1rem', width: '100%'}}
                  >Log in</Button>
            </form>
            <Typography 
              variant='subtitle1' 
              sx={{textAlign: 'center', color: 'black'}}
              >
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