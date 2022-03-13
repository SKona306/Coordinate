import { Alert, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'
import Itinerary from './Itinerary';
import NewItineraryItemsForm from './NewItineraryItemsForm';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from '../../services/firebase';
import ProfileCreateForm from './ProfileCreateForm';
import MainHeader from './MainHeader';
import ProfileModal from './ProfileModal';
import NewToDoForm from './NewToDoForm';
import TodoList from './TodoList';
import TripCreateForm from './TripCreateForm';


const Dashboard = () => {
  const [itineraryFormPageVisible, setitineraryFormPageVisble] = useState(false);
  const [toDoFormPageVisible, setTodoFormPageVisible] = useState(false)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')
  const [user, setUser] = useState(null)
  const [open, setOpen] = useState(false);
  const { currentUser } = useAuth()
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)
  let navigate = useNavigate()

  useEffect(() => {
    if(!currentUser) {
      navigate("/")
    } else {
      setLoading(true)
      onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
        const user = doc.data()
        setUser(user)
        setLoading(false)
      }, (error) => {
        setError(error.message)
      })
    }
  }, [currentUser]) 
  
  if(user?.name === '') { //when ready for production add: && user.name === ''
    return (
      <ProfileCreateForm />
    )
  }

  if(user?.trips.length === 0) {
    return (
      <TripCreateForm />
    )
  }

  if(toDoFormPageVisible === true) {
    return (
    <NewToDoForm 
      todoFormVisibleControl = {setTodoFormPageVisible}/>
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
        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          <div>
            <MainHeader 
              handleOpenModalClick = {handleOpen}/>
            {error && <Alert variant='error'>{error}</Alert>}
            <Itinerary 
              handleAddItineraryItems = {setitineraryFormPageVisble}/>
            <ProfileModal 
              modalOpenControl = {open}
              handleCloseModalClick = {handleClose}
              userData = {user}
              isDataLoading = {loading}/>
            <TodoList 
              handleAddToDoItemClick = {setTodoFormPageVisible}/>
          </div>
          
        )}
        
      </React.Fragment>
      
    )
  }
}

export default Dashboard