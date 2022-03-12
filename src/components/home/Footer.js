import React from 'react'
import { Container, Grid, Box } from '@mui/material'
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  return (
    <div>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#6E7582"
        color="white"
        height='auto'
        width='100vw'
        sx={{fontFamily:"'Quicksand', sans-serif", fontWeight:'bold'}}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5} >
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Coordinate Inc.</Box>
              <Box>
                <p style={{marginBottom: '0'}}>1234 NS 65 Puallup,</p>
                <p style={{margin: 0}}>Ivory Coast, Washington,</p>
                <p style={{marginTop: 0}}>United States</p>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} >
              <Box borderBottom={1}>Account</Box>
              <Box>
                <Link to='/login' style={{color: 'white'}} >
                  Login
                </Link>
              </Box>
              <Box>
                <Link to='/signup' style={{color: 'white'}}>
                  Register
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Contact Us</Box>
              <Box>
                <p><EmailIcon />  CoordinateUS@coordiante.io</p>
              </Box>
              <Box>
                <p><PhoneIcon /> +1(352)-182-1885</p>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" >
            Coordinate.IO &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </div>
  )
}

export default Footer