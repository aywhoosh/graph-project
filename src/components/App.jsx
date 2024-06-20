import React, {useState} from "react";
import LineGraph from "./LineGraph";
import Divider from '@mui/material/Divider';

function App () {
    const [zoom, setZoom] = useState(false);

    return <div className="graph-container">
        <div className="top-half">
            {/* <img src="../../public/heatmap.svg" alt="" /> */}
            

        </div>

        <Divider style={{ padding: 10 }}>Center</Divider>

        <div className="bottom-half">
            <LineGraph />

        </div>
    </div>
}

export default App;