import React from "react";
import { Line } from "recharts";

const StackedLineSeries = ({dataKey, color, yAxisLabel, height}) => {
    return (
        <Line 
        type="monotone"
        dataKey={dataKey}
        stroke={color}
        yAxisId={dataKey}
        dot={false}
        activeDot={false}
        height={height}
        />
    );
};

export default StackedLineSeries