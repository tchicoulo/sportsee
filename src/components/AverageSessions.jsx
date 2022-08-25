import React, { useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const AverageSessions = ({ data }) => {
  console.log(data);
  const [perc, setPerc] = useState(0);

  let dataDays = ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"];
  let dataObj = data.sessions;

  for (let i = 0; i < dataObj.length; i++) {
    for (let j = 0; j < dataDays.length; j++) {
      if (i === j) {
        dataObj[i].day = dataDays[j];
      }
    }
  }

  const onMouseMove = (hoveredData) => {
    if (hoveredData && hoveredData.activePayload) {
      const hoveredX = hoveredData.activePayload[0].payload.day;
      const index = dataObj.findIndex((d) => d.day === hoveredX);
      console.log(index);
      const percentage =
        ((dataObj.length - index - 1) * 100) / (dataObj.length - 1);

      setPerc(100 - percentage);
    }
  };

  const onMouseOut = () => {
    setPerc(0);
  };

  const customToolTip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="kilos">{`${payload[0].value}min`}</p>
        </div>
      );
    }
  };

  return (
    <div className="average-sessions">
      <h3>Durée moyenne de sessions</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={730}
          height={250}
          data={dataObj}
          margin={{ top: 20, right: 20, left: 20, bottom: 70 }}
          onMouseMove={onMouseMove}
          onMouseOut={onMouseOut}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="#FFF" stopOpacity={0.1} />
              <stop offset={`${perc}%`} stopColor="#FFF" stopOpacity={0.1} />
              <stop offset={`${perc}%`} stopColor="#000" stopOpacity={0.1} />
              <stop offset={`${100}%`} stopColor="#000" stopOpacity={0.1} />
            </linearGradient>
          </defs>
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
          <CartesianGrid
            vertical={false}
            horizontal={false}
            strokeDasharray="3 3"
          />
          <Tooltip content={customToolTip} cursor={false} />
          <Area
            type="monotone"
            dataKey={"sessionLength"}
            stroke="#FFF"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorUv)"
            yAxisId="right"
            dot={false}
            activeDot={{ r: 4 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessions;
