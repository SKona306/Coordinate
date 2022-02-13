import React from 'react'

const SplashPage = () => {
  return (
    <React.Fragment>
      <div className='welcome-wrapper'>
        <div className='background-image-wrapper'></div>
        <div className='welcome-title'></div>
      </div>
      <div className='process-wrapper'>
        <div className='step-one'>
          <h3>Step One: Sign up for Coordinate</h3>
        </div>
        <div className='step-two'>
          <h3>Step Two: Add a Trip</h3>
        </div>
        <div className='step-three'>
          <h3>Step Three: Add trip details</h3>
          <p style={{color:'lightgray'}}>(itinerary, pre-trip to-do's, activity ideas, etc.)</p>
        </div>
        <div className='step-four'>
          <h3>Step Four: Invite your friends!</h3>
        </div>
        <div className='step-five'>
          <h3>Step Five: Sit back and Relax</h3>
          <p style={{color:'lightgray'}}>We'll take care of everything from here</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SplashPage