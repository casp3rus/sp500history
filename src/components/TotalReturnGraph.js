import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";

const TotalReturnGraph = ({ data }) => {
  const graphData = [...data].reverse();

  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart
        data={graphData}
        margin={{ top: 30, right: 50, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient
            id="colorCumulativeReturn"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="5%" stopColor="#20B2AA" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#20B2AA" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <XAxis dataKey="year" interval="preserveStartEnd" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="cumulativeReturn"
          stroke="#20B2AA"
          fillOpacity={1}
          fill="url(#colorCumulativeReturn)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default TotalReturnGraph;
