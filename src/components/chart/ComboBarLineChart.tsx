// ComboBarLineChart.tsx
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement, LineController, BarController } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  LineController,
  BarController,
  ChartDataLabels,
  Title,
  Tooltip,
  Legend
);

interface ComboBarLineChartProps {
  data: ChartData<'bar' | 'line'> | any;
  options?: ChartOptions<'bar' | 'line'> | any;
}

export default function ComboBarLineChart({data, options}: ComboBarLineChartProps) {
  

  return <Chart type='bar' data={data} options={options} />;
};


