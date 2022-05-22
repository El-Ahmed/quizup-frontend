import {Button, TextField} from '@mui/material';
import { join } from 'path';
import React, { FC, useEffect, useState } from 'react';
import PopUp from '../PopUp/PopUp';
import './TopBar.css'

type topBar = {
    join: Function,
}

function TopBar () {
    const [joining, setJoining] = useState<boolean>(false);
    const join = () => {
        setJoining(true);
    }
   

    return (
        <div className='topBar' onClick={()=>{}}>
            <div className='searchBar'>
            <TextField
                id="mainSearch"
                variant="outlined"
                fullWidth
                label="Search"
                margin='none'
                size="small" 
            />
 
            </div>
           
            <Button variant="contained"
            style={{textTransform: 'none'}}
            onClick={join}
            >Join a quiz</Button>

            <PopUp open={joining} setOpen={setJoining}/>

            
        </div>
    );

}


export default TopBar;