import {Button, TextField} from '@mui/material';
import React from 'react';
import './TopBar.css'


function TopBar () {

    return (
        <div className='topBar'>
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
            >Join a quiz</Button>


            
        </div>
    );

}


export default TopBar;