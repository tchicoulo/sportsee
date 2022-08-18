import React from "react";
import { PieChart, Pie, Cell, Label, ResponsiveContainer } from "recharts";

const Objectifs = ({ data }) => {
  console.log(data);
  const dataScore = data.todayScore;
  console.log(dataScore);

  const dataPie = [
    { name: "Active Value", value: dataScore },
    { name: "Inactive Value", value: 0.2 },
  ];

  return (
    <div className="objectifs">
      <h2>Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={160} height={160}>
          <Pie
            data={dataPie}
            dataKey={"value"}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={90}
            fill="#82ca9d"
            style={{
              WebkitTransform: "rotate(-30deg)",
              transformOrigin: "center",
              BackgroundColor: "white",
            }}
          >
            {dataPie.map((entry, index) => {
              if (index === 1) {
                return <Cell key={`cell-${index}`} fill="#FBFBFB" />;
                // make sure to map the index to the colour you want
              }
              return <Cell key={`cell-${index}`} fill="#FF0000" />;
            })}
            <Label
              value={`${dataPie[0].value * 100}%`}
              position="center"
              fill="#282D30"
              style={{
                fontSize: "26px",
              }}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Objectifs;
