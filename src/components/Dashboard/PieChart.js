import Typography from "@mui/material/Typography";
import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import Title from "./Title";
const data01 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
];

const data02 = [
  { name: "NGO", value: 100 },
  { name: "Return", value: 400 },
  { name: "Retail", value: 200 },
];

function renderLabel(entry) {
  return entry.name;
}
export default function PieChartCustom() {
  const demoUrl = "https://codesandbox.io/s/pie-chart-of-two-levels-gor24";

  return (
    <>
      <Title>{"  Statistics"}</Title>
      <ResponsiveContainer width="100%" height="100%" sx={{ mt: "-3px" }}>
        <PieChart width={200} height={200}>
          <Pie
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={35}
            fill="#8884d8"
          />
          <Pie
            data={data02}
            label={renderLabel}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            fill="#82ca9d"
            style={{
              marginLeft: "2px",
              fontSize: "14px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}
