import React from 'react'
import { Box, Toolbar, Typography, AppBar, Button } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import { useAuth } from '../../contexts/AuthContext';


const MainHeader = (props) => {
  const { logout } = useAuth();


  const handleLogoutClick = async() => {
    try {
      await logout()
    } catch(error) {
      console.log(error.message)
    }
  }

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar sx={{background: '#046582'}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div className='header-wrapper'>
              <h1 style={{fontSize: '3rem', fontFamily: "'Pacifico', cursive", padding: '0', margin:'5px'}}>Coordinate</h1>
            </div>
          </Typography>
          <Button variant='contained' color='secondary' sx={{fontFamily: "'Quicksand', sans-serif"}} onClick={handleLogoutClick}>Log Out</Button>
          <IconButton
            onClick={props.profilePageVisible}>
            <PersonIcon sx={{fontSize: '40px', color: 'white'}} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    </React.Fragment>
  )
}

export default MainHeader