import { Alert, Button } from '@mui/material';
import React, { useState } from 'react'
import Itinerary from './Itinerary';
import NewItineraryItemsForm from './NewItineraryItemsForm';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [itineraryFormPageVisible, setitineraryFormPageVisble] = useState(false);
  const [error, setError] = useState('')
  const { logout } = useAuth()
  let navigate = useNavigate()

  const handleClick = async() => {
    try {
      await logout()
      navigate("/")
    } catch {
      setError('Failed to logout')
    }
  }

  const handleAddItineraryClick = () => {
    setitineraryFormPageVisble(true);
  }

    if(itineraryFormPageVisible === true) {
      return (
        <NewItineraryItemsForm 
        formVisibleControl = {setitineraryFormPageVisble}
        />
      )
    } else {
      return (
        <React.Fragment>
          {error && <Alert variant='error'>{error}</Alert>}
          <Itinerary />
          <button className='addItineraryItem' onClick={handleAddItineraryClick}>Add Iteneray Items</button>
          <Button variant='contained' color='secondary' onClick={handleClick}>Log Out</Button>
        </React.Fragment>
        
      )
    }
}

export default Dashboard