import React from 'react';
// npm
import { AreaChart, Area, YAxis } from 'recharts';

interface IProps {
  data: string[];
  isPositive: boolean;
}

const CustomSmallAreaChart = ({ data, isPositive }: IProps) => {
  const convertData = () => {
    return data.map((item) => ({
      point: Number(item),
    }));
  };

  return (
    <AreaChart width={200} height={60} data={convertData()}>
      <Area
        type="monotone"
        dataKey="point"
        stroke={isPositive ? '#30BE81' : '#EB4137'}
        fill={isPositive ? '#30be8163' : '#eb413754'}
      />
      <YAxis domain={['dataMin', 'dataMax']} axisLine={false} tick={false} />
    </AreaChart>
  );
};

export default CustomSmallAreaChart;
