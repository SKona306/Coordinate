import { Container, CssBaseline, Paper } from '@mui/material'
import React from 'react'
import splashpagebackground from '../../assets/images/splashpageBG.jpg'
const Header = () => {

  const styles = {
    paperBackgroundImage : {
      backgroundImage: `url(${splashpagebackground})`,
      height: '50vh',
      width: '100vw',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  }

  return (
    <React.Fragment>
      <div className='header-wrapper' style={{display: 'flex', flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center'}}>
        <h1 style={{fontSize: '3rem', fontFamily: "'Pacifico', cursive", padding: '0', margin:'5px'}}>Coordinate</h1>
      </div>
      <div className='splash-page-main'>
        <CssBaseline />
        <Paper style={styles.paperBackgroundImage} square>
          <Container>
            <Paper>
              <Container>
                <div className='description-card'>
                  <h1>Relaxation Reimagined</h1>
                  <h3>At Coordinate we strive to maximize your relaxation time by taking care of the details. Join us in </h3>
                </div>
              </Container>
            </Paper>
        </Container>
        </Paper>
        
      </div>
    </React.Fragment>
  )
}

export default Header