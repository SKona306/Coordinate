import { Button, Container, CssBaseline, Paper, Box, AppBar, Toolbar, Typography  } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import compressedbannerone from '../../assets/images/compressedbannerone.jpg'


const Header = () => {
  const navigate = useNavigate();

  const styles = {
    paperBackgroundImage : {
      backgroundImage: `url(${compressedbannerone})`,
      height: 'auto',
      minHeight: '60vh',
      width: '100vw',
      paddingBottom:"5rem",
      paddingTop: '2rem',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      fontFamily: " 'Quicksand', sans-serif"
    },
    centerElements : {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    descriptionCard: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      margin: '0.5rem',
      width: 'auto'
    }
  }

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, width: '100vw' }} >
      <AppBar position="static">
        <Toolbar sx={{background: '#046582'}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div className='header-wrapper'>
              <h1 style={{fontSize: '3rem', fontFamily: "'Pacifico', cursive", padding: '0', margin:'5px'}}>Coordinate</h1>
            </div>
          </Typography>
          <Button 
            color="inherit" 
            sx={{backgroundColor: '#F39189', fontFamily:"'Quicksand', sans-serif", fontWeight:'bold'}} 
            onClick={() => navigate("/signup")} >Sign Up</Button>
          <Button 
            color="inherit" 
            sx={{fontFamily:"'Quicksand', sans-serif", fontWeight:'bold'}}
            onClick={() => navigate("/login")}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
      
      <div className='splash-page-main' style={{width: '100vw'}}>
        <CssBaseline />
        <Paper style={styles.paperBackgroundImage} square >
          <Container style={styles.centerElements}>
            <Paper style={{marginTop: '6rem', background: "linear-gradient(150deg, #046582, #6b73a9, #c17aa8, #f39189)"}}>
              <Container>
                <div style={styles.descriptionCard}>
                  <h1 style={{marginBottom: '0.5rem'}}>Relaxation Reimagined</h1>
                  <h3 style={{width: '50%', margin: '0', textAlign: 'center'}}>At Coordinate we strive to maximize your relaxation time by taking care of the details. Join us in our mission to create a more relaxed world! </h3>
                  <Button variant='contained' color='secondary' sx={{margin: '1.5rem', backgroundColor: '#F39189'}} onClick={() => navigate("/signup")}>Sign Up</Button>
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