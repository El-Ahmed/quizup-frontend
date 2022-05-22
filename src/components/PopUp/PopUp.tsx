import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import './PopUp.css';


type popUp = {
    setOpen: Function,
    open: boolean,
}

function PopUp(props: popUp) {
    const handleClose = () => {
        props.setOpen(false);
    }
    return (
        <div className="popUp">
        <Dialog open={props.open}  onClose= {handleClose}>
             <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#333',
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle>Join a hosted Quiz</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Use the code given to you by the host to join the quiz
          </DialogContentText>
          <div className="pin">

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="PIN"
            type="text"
            fullWidth
            variant="standard"
          />
            <Button onClick={handleClose}>Join</Button>
          </div>
        </DialogContent>
        {/* <DialogActions> */}
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        {/* </DialogActions> */}
      </Dialog>
        </div>
    )

}

export default PopUp;