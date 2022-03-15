import React, { useState } from 'react'
import { Container, Paper, TextField, Typography, Button, Alert } from '@mui/material'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useAuth } from '../../contexts/AuthContext';
import { doc, writeBatch } from 'firebase/firestore';
import { db } from '../../services/firebase';

const TripCreateForm = () => {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [dates, setDates] = useState('')
  const { currentUser } = useAuth()
  const [error, setError] = useState('')

  const handleClick = async() => {
    try {
      const batch = writeBatch(db);

      const newTripRef = doc(db, 'trips', location);
      batch.set(newTripRef,
        {
          name: name,
          loaction: location,
          dates: dates,
          itinerary: [],
          todo: [],
          creator: currentUser.uid
        })
      
      const userRef = doc(db, 'users', currentUser.uid);
      batch.update(userRef, {trips: location});

      await batch.commit()
    } catch(error) {
      setError(error.message)
    }
  }

  return (
    <div className='center-form' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <div className='content'>
        <Container>
          <Paper variant='outlined' style={{minWidth: '500px'}}>
            <Typography variant='h1' style={{fontSize: '40px', margin:'1rem', textAlign: 'center'}}>
              
              <AccountBoxIcon style={{fontSize: '40px'}}/>Create Trip
            </Typography>
            {error && <Alert severity="error" sx={{margin: '1rem', marginTop: '0'}}>{error}</Alert>}
            <hr style={{maxWidth: '35vw'}}/>
            <Container>
              <Typography variant='h6' >
              Name:  
              </Typography>
              <TextField required type='text' onChange={(e) => setName(e.target.value)} fullWidth placeholder='2022 Family Reunion'/>
              <Typography variant = 'h6'>
                Location: 
              </Typography>
              <TextField required type='email' fullWidth placeholder='ex. Honolulu, Hawaii' onChange={(e) => setLocation(e.target.value)}/>
              <Typography>
                Dates:
              </Typography>
              <TextField required type='text' onChange={(e) => setDates(e.target.value)} fullWidth placeholder='05/22/2022-05/30/2022'></TextField>
              <Button variant='contained' color="secondary" fullWidth style={{marginTop: '1rem', marginBottom: '1rem'}} onClick={handleClick}>Add Trip</Button>
            </Container>
          </Paper>
        </Container>
      </div>
    </div>
  )
}

export default TripCreateForm