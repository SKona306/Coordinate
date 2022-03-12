import { Alert, Button } from '@mui/material';
import React, { useState, useEffect } from 'react'
import Itinerary from './Itinerary';
import NewItineraryItemsForm from './NewItineraryItemsForm';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { query, collection, where, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase';
import ProfileCreateForm from './ProfileCreateForm';
import MainHeader from './MainHeader';

const Dashboard = () => {
  const [itineraryFormPageVisible, setitineraryFormPageVisble] = useState(false);
  const [ProfilePageVisible, setProfilePageVisible] = useState(false)
  const [error, setError] = useState('')
  const [user, setUser] = useState()
  const { currentUser } = useAuth()
  let navigate = useNavigate()

  useEffect(() => {
      if(!currentUser) {
        navigate("/")
      } else {
        fetchUserData(currentUser.uid)
      }
    }, [currentUser]) 

  const fetchUserData = async(uid) => {
    try {
      const q = query(collection(db, 'users'), where("uid", "==", uid));
      const doc = await getDocs(q);
      const userData = doc.docs[0].data();
      setUser(userData);
    } catch(error) {
      console.log(error.message);
    }
  }  

  // if(currentUser && user.name === '') { //when ready for production add: && user.name === ''
  //   return (
  //     <ProfileCreateForm />
  //   )
  // }

  if(itineraryFormPageVisible === true) {
    return (
      <NewItineraryItemsForm 
      formVisibleControl = {setitineraryFormPageVisble}
      />
    )
  } else {
    return (
      <React.Fragment>
        <MainHeader 
          profilePageVisible = {setProfilePageVisible}/>
        {error && <Alert variant='error'>{error}</Alert>}
        <Itinerary 
          handleAddItineraryItems = {setitineraryFormPageVisble}/>
      </React.Fragment>
      
    )
  }
}

export default Dashboard