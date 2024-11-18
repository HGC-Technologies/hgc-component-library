// ComboBarLineChart.tsx
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement, LineController, BarController } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  LineController,
  BarController,
  Title,
  Tooltip,
  Legend
);

interface ComboBarLineChartProps {
  data: ChartData<'bar' | 'line'>;
  options?: ChartOptions<'bar' | 'line'>;
}

const ComboBarLineChart: React.FC<ComboBarLineChartProps> = ({data, options}) => {
  

  return <Chart type='bar' data={data} options={options} />;
};

export default ComboBarLineChart;
