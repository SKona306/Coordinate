import React from 'react'

const Header = () => {
  return (
    <React.Fragment>
      <div className='header-wrapper' style={{display: 'flex', flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center'}}>
        <h1 style={{fontSize: '3rem', fontFamily: "'Pacifico', cursive", padding: '0', margin:'5px'}}>Coordinate</h1>
        <p style={{padding:'0', margin:'5px'}}>Let us help you minimize stress and maximize relaxation</p>
      </div>
      <hr />
    </React.Fragment>
  )
}

export default Header