

import { Button } from '@mui/material';
import { useState } from 'react';
import './sidebar.css'


function SideBar() {
    const [chosen, setChosen] = useState(2);
    const chosenClass = (i:number) => {
        if (i==chosen)
            return 'pagechosen';
        return 'page'
    }
    const chose = (i:number) => {
        setChosen(i);
    }
    return (
    <div className="sidebar">
        <Button onClick={() => {setChosen(1)}} className={chosenClass(1)}>Dashboard</Button>
        <Button onClick={() => {setChosen(2)}}className={chosenClass(2)}>Explore</Button>
        <Button onClick={() => {setChosen(3)}}className={chosenClass(3)}>My Quizzes</Button>
    </div>
    );
}

export default SideBar;