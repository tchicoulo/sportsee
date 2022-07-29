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
  let dataKindValues = [];
  dataKindValues.push(Object.values(data.kind));
  let dataCopied = { ...data };
  // dataCopied.data.splice(0, 5, dataKindValues);
  console.log(dataCopied);

  return (
    <div className="performances">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.data}>
          <PolarGrid />
          <PolarAngleAxis dataKey={"kind"} />
          <PolarRadiusAxis axisLine={false} />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Performances;
