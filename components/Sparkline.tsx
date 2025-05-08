"use client";
import { LineChart, Line } from "recharts";

export default function Sparkline({ data }: { data: number[] }) {
  console.log("Sparkline data:", data);
  return (
    <LineChart width={120} height={40} data={data.map((price, idx) => ({ idx, price }))}>
      <Line
        type="monotone"
        dataKey="price"
        stroke="#16a34a"
        strokeWidth={2}
        dot={false}
        isAnimationActive={false}
      />
    </LineChart>
  );
} 