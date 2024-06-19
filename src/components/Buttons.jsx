import React from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

// <button id="incr" onClick={handleIncrease}> + </button>
        // <button id="decr" onClick={props.width <1000 ? alert("cannot decrease further") : handleDecrease}> - </button>

function Buttons(props) {

    function handleIncrease() {
        props.setWidth(props.width+1000);
    }

    function handleDecrease() {
        props.setWidth(props.width-1000);
    }

    return <div className="button-container">  
    <Fab onClick={handleIncrease} 
    color="primary" aria-label="add"> 
        <AddIcon />
    </Fab>
    <Fab className="right" onClick={handleDecrease} 
    color="primary" aria-label="add"> 
        <RemoveIcon />
    </Fab>
        
</div>
}

export default Buttons;