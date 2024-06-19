import React, { useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import rawData from "../../public/rawData";

   

const num = 40;
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

console.log(lineComponents);

function App () {
    const [width, setWidth] = useState(1000);
    

        function handleIncrease() {
            setWidth(width+1000);
        }

        function handleDecrease() {
            setWidth(width-1000);
        }
    

    return <div >
        <button onClick={handleIncrease}> Increase </button>
        <button onClick={width <1000 ? alert("cannot decrease further") : handleDecrease}> Decrease </button>
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

export default App;