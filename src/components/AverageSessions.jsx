import React from "react";
import moment from "moment";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

const AverageSessions = ({ data }) => {
  console.log(data);
  return (
    <div className="average-sessions">
      <h3>Durée moyenne de sessions</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data.sessions}
          margin={{
            top: 20,
            left: 20,
            right: 20,
            bottom: 70,
          }}
        >
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis
            dataKey={"day"}
            stroke="#FFFFFF"
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            yAxisId={"right"}
            orientation={"right"}
            hide
            axisLine={false}
          />
          <Tooltip />
          <Line
            stroke="#FFFFFF"
            strokeWidth={2}
            type={"basis"}
            dataKey={"sessionLength"}
            yAxisId="right"
            dot={false}
            activeDot={{ r: 4 }}
          />
          {/* <Area type={"monotone"} dataKey={"sessionLength"} /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessions;
