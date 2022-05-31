import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, TextField } from "@mui/material";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import './PopUp.css';
import { Link } from "react-router-dom";
import ParticipantFacade from "../../socketsModule/facade/ParticipantFacade";


type popUp = {
    setOpen: Function,
    open: boolean,
}

function PopUp(props: popUp) {


    const [pin, setPin] = useState('');
    const [name, setName] = useState('');
    

    const writePin = (e:ChangeEvent<HTMLInputElement>) => {
        setPin(e.currentTarget.value);
    }
    const writeName = (e:ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    }

    const handleClose = () => {
        props.setOpen(false);
    }
    const setId = (id:string) => {}
    const participationObserver = () => {}
    
    const join =() => {
      
      console.log(pin+" "+ name);
      ParticipantFacade.participate(pin, name, participationObserver,  setId);

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
            label="Name"
            type="text"
            fullWidth
            variant="standard"

            value={name}
            onChange={writeName}
          />
          </div>
          <div className="pin">
          <TextField
            autoFocus
            margin="dense"
            id="pin"
            label="PIN"
            type="text"
            fullWidth
            variant="standard"
            
            value={pin}
            onChange={writePin}
          />
          {/* <Link to='/join'> */}
            <Button onClick={join}>Join</Button>
          {/* </Link> */}
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