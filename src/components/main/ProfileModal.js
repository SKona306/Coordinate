import { Button, Fade, Modal, Typography, Backdrop,  } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { friendsDatabase } from './StaticDatabase'
import EditIcon from '@mui/icons-material/Edit';
import { Add } from '@mui/icons-material';

const ProfileModal = (props) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
    {props.isDataLoading ? (
      <Typography>
        Loading...
      </Typography>
    ) : (
      <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.modalOpenControl}
        onClose={props.handleCloseModalClick}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
      <Fade in={props.modalOpenControl}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h4" component="h2">
            Profile: 
          </Typography>
          <hr />
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            Name: {props.userData?.name}
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            Email: {props.userData?.email}
          </Typography>
          <Button 
            variant="contained" 
            fullWidth 
            sx={{mt: 2}}
            endIcon={<EditIcon />}>Edit Profile</Button>
          <Typography id="transition-modal-title" variant="h6" component="h2" sx={{mt: 1}}>
            Friends:
          </Typography>
          <hr />
          {friendsDatabase.map((friend) => {
            return (
              <div key={friend.id}>
                <Typography>
                  {friend.name}
                </Typography>
              </div>
            )
          })}
            <Button
              variant="contained"
              fullWidth
              sx={{mt: 2}}
              endIcon={<Add />}>Add Friends</Button>
        </Box>
      </Fade>
      </Modal>
      </div>
    )}
  </>
  )

}

export default ProfileModal