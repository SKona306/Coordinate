import { Alert, Button } from '@mui/material';
import React, { useState, useEffect } from 'react'
import Itinerary from './Itinerary';
import NewItineraryItemsForm from './NewItineraryItemsForm';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { query, collection, where, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase';
import ProfileCreateForm from './ProfileCreateForm';

const Dashboard = () => {
  const [itineraryFormPageVisible, setitineraryFormPageVisble] = useState(false);
  const [error, setError] = useState('')
  const [user, setUser] = useState()
  const { logout, currentUser } = useAuth()
  let navigate = useNavigate()

  const fetchUserData = async(uid) => {
    try {
      const q = query(collection(db, 'users'), where("uid", "==", uid));
      const doc = await getDocs(q);
      const userData = doc.docs[0].data();
      setUser(userData);
    } catch(error) {
      return error.message;
    }
  }  

  const handleClick = async() => {
    try {
      await logout()
    } catch {
      setError('Failed to logout')
    }
  }

  const handleAddItineraryClick = () => {
    setitineraryFormPageVisble(true);
  }

  useEffect(() => {
    if(!currentUser) {
      navigate("/")
    } else {
      fetchUserData(currentUser.uid)
    }
  }, [currentUser]) 


  if(currentUser && user.name === '') { //when ready for production add: && user.name === ''
    return (
      <ProfileCreateForm />
    )
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