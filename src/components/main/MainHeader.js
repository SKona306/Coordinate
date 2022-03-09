import React from 'react'
import { Button, Box, Toolbar, Typography, AppBar  } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const MainHeader = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{background: '#046582'}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div className='header-wrapper'>
              <h1 style={{fontSize: '3rem', fontFamily: "'Pacifico', cursive", padding: '0', margin:'5px'}}>Coordinate</h1>
            </div>
          </Typography>
          <Button color="inherit" sx={{backgroundColor: '#F39189'}} onClick={() => navigate("/profile")} >Sign Up</Button>
          <Button color="inherit" onClick={() => navigate("/login")}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </React.Fragment>
  )
}

export default MainHeader