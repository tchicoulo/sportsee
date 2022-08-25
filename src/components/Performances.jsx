import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const Performances = ({ data }) => {
  let kindValues = [];
  kindValues.push(Object.values(data.kind));
  kindValues = kindValues[0];
  const dataObj = data.data;

  for (let i = 0; i < dataObj.length; i++) {
    for (let j = 0; j < kindValues.length; j++) {
      if (i === j) {
        dataObj[i].kind = kindValues[j];
      }
    }
  }

  return (
    <div className="performances">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="80%"
          data={dataObj}
          margin={{
            top: 10,
            right: 30,
            left: 30,
            bottom: 10,
          }}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            dy={5}
            stroke="#FFFFFF"
            fontSize={12}
            tickLine={false}
          />
          <PolarRadiusAxis axisLine={false} tick={false} />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Performances;
