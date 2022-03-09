import React from 'react'
import { Box, Toolbar, Typography, AppBar  } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';


const MainHeader = (props) => {
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