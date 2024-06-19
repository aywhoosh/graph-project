import React from "react";
import LineGraph from "./LineGraph";
import text from "../sample";
import Divider from '@mui/material/Divider';

function App () {
    return <div className="graph-container">
        <div className="top-half">
            <p>{text}</p>
            {/* <HeatGraph /> */}

        </div>

        <Divider style={{ padding: 10 }}>Center</Divider>

        <div className="bottom-half">

            
            <LineGraph />
        </div>
    </div>
}

export default App;