import React, { useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import rawData from "../../public/rawData";
import Buttons from "./Buttons"

const num = 369;
const datakeys = [];
for(let i = 1; i<=num; i++){
    datakeys.push("s"+i);
};

const lineComponents = datakeys.map((datakey, index) => (
    <Line type="monotone"
    dataKey={datakey}
    stroke={index%2===0 ? "#f37022" : "#02164F"}
    dot={false}
    key={datakey}
    isAnimationActive={false}
    />
));

function LineGraph() {
    const [width, setWidth] = useState(1000);
    return <div>

        <Buttons width={width} setWidth={setWidth} />

        {lineComponents.map( (line,index) => (
            <div key={index}>
                <LineChart width={width} height={100} data={rawData} margin={{ top: 0, right: 20, bottom: 20, left: 0 }}>
                    {line}
                    {index == num-1 && <XAxis />}
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        ))}

    </div>
}   

export default LineGraph;
   