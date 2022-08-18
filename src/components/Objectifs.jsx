import React from "react";
import { PieChart, Pie, Cell, Label, ResponsiveContainer } from "recharts";

const Objectifs = ({ data }) => {
  console.log(data);
  const dataScore = data.todayScore;
  console.log(dataScore);

  const dataPie = [
    { name: "Active Value", value: dataScore },
    { name: "Inactive Value", value: 0.88 },
  ];

  const dataPieInner = [{ name: "Active Value", value: 1 }];

  const CustomLabel = ({ viewBox, noOfBubbleTeaSold = 0 }) => {
    const { cx, cy } = viewBox;
    return (
      <React.Fragment>
        <text x={cx - 20} y={cy - 5}>
          <tspan
            style={{
              fontWeight: 700,
              fontSize: "26px",
              fill: "#282D30",
              // fontFamily: "Roboto",
            }}
          >
            {noOfBubbleTeaSold}
          </tspan>
        </text>
        <text x={cx - 25} y={cy + 25}>
          <tspan
            style={{
              fontWeight: 500,
              fontSize: "16px",
              fill: "#74798C",
            }}
          >
            de votre
          </tspan>
        </text>
        <text x={cx - 25} y={cy + 50}>
          <tspan
            style={{
              fontWeight: 500,
              fontSize: "16px",
              fill: "#74798C",
            }}
          >
            objectif
          </tspan>
        </text>
      </React.Fragment>
    );
  };

  return (
    <div className="objectifs">
      <h2>Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={160} height={160}>
          <Pie
            cornerRadius={20}
            data={dataPie}
            dataKey={"value"}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={90}
            style={{
              WebkitTransform: "rotate(-30deg)",
              transformOrigin: "center",
            }}
          >
            {dataPie.map((entry, index) => {
              if (index === 1) {
                return <Cell key={`cell-${index}`} fill="#FBFBFB" />;
              }
              return <Cell key={`cell-${index}`} fill="#FF0000" />;
            })}
          </Pie>
          <Pie
            data={dataPieInner}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#FFF"
          >
            <Label
              content={
                <CustomLabel noOfBubbleTeaSold={`${dataPie[0].value * 100}%`} />
              }
              position="center"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Objectifs;
