import React from 'react'
import { itineraryItemsDatabase } from './StaticDatabase'



const Itinerary = () => {
  let database = itineraryItemsDatabase;
  return (
    <React.Fragment>
      <div className='itinerary-wrapper' style={{border:'1px solid black'}}>
        <div className='itinerary-title' style={{display:'flex', justifyContent:'center', alignItems:'center', paddingBottom:'0', margin:'0' }}>
          <h1>Your Itinerary:</h1>
        </div>
        <hr style={{display:'flex', justifyContent:'center', alignItems:'center', width: '50%', marginTop:'5px'}} />
        <div className='itinerary-items'>
          {database.map((item, index) => {
            return (
              <div className='item'>
                <ol>
                  <li key={index}>
                    <h3>{item.label} : {item.category}</h3>
                    <p>Due By: {item.day} at {item.time}</p>
                    <p>Click to see more details!</p>
                  </li>
                </ol>
              </div>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Itinerary