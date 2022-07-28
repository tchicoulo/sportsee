import React from "react";
import moment from "moment";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DailyActivity = ({ data }) => {
  const formatXAxis = (tickFormat) => {
    return moment(tickFormat).format("D");
  };
  // console.log(data.sessions);
  return (
    <div className="daily-activity">
      <h3>Activité Quotidienne</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={835}
          height={320}
          data={data.sessions}
          margin={{
            top: 10,
            right: 30,
            left: 50,
            bottom: 110,
          }}
        >
          <Legend
            iconSize={8}
            iconType={"circle"}
            verticalAlign={"top"}
            align={"right"}
            wrapperStyle={{ top: -41, left: 50 }}
          />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            dataKey={"day"}
            stroke="#9B9EAC"
            tickFormatter={formatXAxis}
            axisLine={false}
            tickLine={false}
            dy={20}
          />
          <YAxis
            yAxisId={"right"}
            orientation="right"
            stroke="#9B9EAC"
            axisLine={false}
            tickLine={false}
            dx={20}
          />
          <YAxis
            yAxisId={"left"}
            orientation="left"
            stroke="#9B9EAC"
            hide
            axisLine={false}
          />
          <Tooltip />
          <Bar
            yAxisId="right"
            barSize={7}
            dataKey="kilogram"
            name="Poids(kg)"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            yAxisId="left"
            barSize={7}
            dataKey="calories"
            name="Calories brûlées (kCal)"
            fill="#ff0101"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyActivity;
