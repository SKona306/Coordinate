import { Container, Paper, TextField, Typography, Button, Alert } from '@mui/material'
import React, { useState } from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import './ProfileCreateForm.css'
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { useAuth } from '../../contexts/AuthContext';

const ProfileCreateForm = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const { currentUser } = useAuth()
  const [error, setError] = useState('')

  const handleClick = async() => {
    try {
      const userRef = doc(db, "users", currentUser.uid);
      await updateDoc(userRef, {
        email: email,
        name: name
      })
    }catch(error) {
      setError(error.message)
    }
  }
  return (
    <>
    <div className='center-form' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <div className='content'>
        <Container>
          <Paper variant='outlined' style={{minWidth: '500px'}}>
            <Typography variant='h1' style={{fontSize: '40px', margin:'1rem', textAlign: 'center'}}>
              
              <AccountBoxIcon style={{fontSize: '40px'}}/>Create Profile
            </Typography>
            {error && <Alert severity="error" sx={{margin: '1rem', marginTop: '0'}}>{error}</Alert>}
            <hr style={{maxWidth: '35vw'}}/>
            <Container>
              <Typography variant='h6' >
              Name:  
              </Typography>
              <TextField required type='text' onChange={(e) => setName(e.target.value)} fullWidth />
              <Typography variant = 'h6'>
                Email: 
              </Typography>
              <TextField required type='email' fullWidth placeholder={currentUser.email} onChange={(e) => setEmail(e.target.value)}/>
              <Button variant='contained' color="secondary" fullWidth style={{marginTop: '1rem', marginBottom: '1rem'}} onClick={handleClick}>Create Profile</Button>
            </Container>
          </Paper>
        </Container>
      </div>
    </div>
      
    </>
  )
}

export default ProfileCreateForm