import React, { useState } from 'react'
import Itinerary from './Itinerary';
import NewItineraryItemsForm from './NewItineraryItemsForm';

const Dashboard = () => {
  const [itineraryFormPageVisible, setitineraryFormPageVisble] = useState(false);


  const formPageVisible = () => {
    if(itineraryFormPageVisible === true) {
      return (
        <NewItineraryItemsForm />
      )
    } else {
      return (
        <Itinerary />
      )
    }
  }

  const handleAddItineraryClick = () => {
    setitineraryFormPageVisble(true);
  }


  return (
    <React.Fragment>
      {formPageVisible}
      <button className='addItineraryItem' onClick={handleAddItineraryClick}>Add Iteneray Items</button>
      <NewItineraryItemsForm 
        formVisibleControl = {setitineraryFormPageVisble}/>
    </React.Fragment>
  )
}

export default Dashboard