import React, { useState } from 'react'
import Itinerary from './Itinerary';
import NewItineraryItemsForm from './NewItineraryItemsForm';

const Dashboard = () => {
  const [itineraryFormPageVisible, setitineraryFormPageVisble] = useState(false);

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
          <Itinerary />
          <button className='addItineraryItem' onClick={handleAddItineraryClick}>Add Iteneray Items</button>
        </React.Fragment>
        
      )
    }
}

export default Dashboard