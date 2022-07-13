import React from "react";
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
  console.log(data.sessions);
  return (
    <div className="daily-activity">
      <h3>Activité Quotidienne</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={835}
          height={320}
          data={data.sessions}
          // margin={{
          //   top: 0,
          //   right: 20,
          //   left: 20,
          //   bottom: 5,
          // }}
        >
          <Legend
            iconSize={8}
            iconType={"circle"}
            verticalAlign={"top"}
            align={"right"}
            height={30}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"day"} stroke="#9B9EAC" />
          <YAxis orientation="right" stroke="#9B9EAC" />
          <Tooltip />
          <Bar dataKey="kilogram" name="Poids(kg)" fill="#282D30" />
          <Bar
            dataKey="calories"
            name="Calories brûlées (kCal)"
            fill="#ff0101"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyActivity;
