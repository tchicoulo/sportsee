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
  console.log(data);
  return (
    <div className="daily-activity">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={835} height={320} data={data.sessions}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" stroke="#9B9EAC" />
          <YAxis yAxisId="right" orientation="right" stroke="#9B9EAC" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="kilogram" fill="#282D30" />
          <Bar yAxisId="right" datakey="calories" fill="#ff0101" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyActivity;

// import "./styles.css";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// export default function App() {
//   return (
//     <BarChart
//       width={500}
//       height={300}
//       data={data}
//       margin={{
//         top: 20,
//         right: 30,
//         left: 20,
//         bottom: 5,
//       }}
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" />
//       <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
//       <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
//       <Tooltip />
//       <Legend />
//       <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
//       <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
//     </BarChart>
//   );
// }
