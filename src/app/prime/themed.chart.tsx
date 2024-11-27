'use client';

import { useTheme } from 'next-themes';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { darkTheme, lightTheme } from './recharts.theme';

const sampleData = [
  { name: 'Page A', value: 400 },
  { name: 'Page B', value: 300 },
  { name: 'Page C', value: 200 },
  { name: 'Page D', value: 278 },
  { name: 'Page E', value: 189 },
];

export default function ThemedChart() {
  const { theme } = useTheme();
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <div
      className="rounded-lg shadow-custom p-4"
      style={{ backgroundColor: currentTheme.backgroundColor }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={sampleData}>
          <CartesianGrid stroke={currentTheme.gridColor} />
          <XAxis
            dataKey="name"
            stroke={currentTheme.axisColor}
            tick={{ fill: currentTheme.textColor }}
          />
          <YAxis
            stroke={currentTheme.axisColor}
            tick={{ fill: currentTheme.textColor }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: currentTheme.tooltipBackgroundColor,
              color: currentTheme.tooltipTextColor,
              borderColor: currentTheme.tooltipBorderColor,
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke={currentTheme.lineColor}
            strokeWidth={2}
            dot={{ stroke: currentTheme.lineColor, strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
