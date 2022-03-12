import { Button, Container, Paper, TextField, Typography, Alert } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import React, {useRef, useState, useEffect} from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { doc, setDoc} from 'firebase/firestore'
import { db } from '../../services/firebase';
import './AuthStyles.css'


const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const {signup, currentUser} = useAuth();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();


  const handleSubmit = async() => {
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match')
    }
    
    try {
      setError('')
      setLoading(true)
      const res = await signup(emailRef.current.value, passwordRef.current.value)
      const user = res.user
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: '',
        email: user.email,
        trips: [],
        friendsList: [],
        friendRequests: []
      })
      navigate('/dashboard')
    } catch(error) {
      setError(error.message);
    }
    setLoading(false)
  }

  useEffect(() => {
    if(currentUser) {
      navigate("/dashboard")
    }
  })
  return (
    <>
      <div className='sign-up-wrapper' >
        <Container style={{width: '35vw'}}>
          <Paper 
            variant='outlined' 
            style={{height: 'auto', maxWidth: '600px', minWidth:'450px'  , maxHeight: '650px', }} 
            >
            <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', margin: '1rem'}}>
            <Typography 
              variant='h1' 
              pt={0} 
              sx={{textAlign: 'center', fontSize: '3rem', margin: '2rem', mt: '1rem'}}
              >
              Sign Up
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
                <TextField 
                  fullWidth 
                  required 
                  label='Confirm Password' 
                  type='password' 
                  inputRef={confirmPasswordRef} 
                  />
                <br />
                <Button 
                  variant='contained' 
                  color='secondary' 
                  onClick={handleSubmit} 
                  disabled={loading} 
                  sx={{backgroundColor: '#F39189', marginTop: '1rem', width: '100%'}}
                  >Register</Button>
            </form>
            <Typography 
              variant='subtitle1' 
              sx={{textAlign: 'center', color: 'black'}}
              >
              Already have an account? <Link to="/login">Log In</Link>
            </Typography>
          </div>
          </Paper>
        </Container>
        
      </div>
    </>
  )
}

export default Signup