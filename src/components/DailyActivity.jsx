import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
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

/**
 * Daily activity section
 * @param {object} data The data of the daily activity part
 */

const DailyActivity = ({ data }) => {
  const formatXAxis = (tickFormat) => {
    return moment(tickFormat).format("D");
  };

  /**
   * Add a custom Tooltip into the chart
   * @param {number} active - xAxis hovered
   * @param {number} payload - Data in kilos
   */

  const customToolTip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="kilos">{`${payload[0].value}kg`}</p>
          <p className="kcals">{`${payload[1].value}Kcal`}</p>
        </div>
      );
    }
  };

  return (
    <div className="daily-activity">
      <h3>Activité Quotidienne</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
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
          <Tooltip content={customToolTip} />
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

DailyActivity.propTypes = {
  data: PropTypes.object,
};

export default DailyActivity;
