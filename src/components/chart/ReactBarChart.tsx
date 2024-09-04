import  { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface IBarChart {
    width?:string;
    height?:string;
    data?:ChartData<'bar'>;
    options?:ChartOptions<'bar'>
}
const defaultData:ChartData<'bar'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], 
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  const defaultOptions:ChartOptions<'bar'> = {
    indexAxis: "y" as const,
    scales: {
        x: { 
          beginAtZero: true,
          grid: {
            display: false // This removes the grid lines on the x-axis
          },
        },
        y: {
          grid: {
            display: false // This removes the grid lines on the y-axis
          },
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top', // Use one of the allowed string literals: 'top', 'right', 'bottom', 'left', 'center', 'chartArea'
        },
        title: {
          display: true,
          text: 'Custom Bar Chart', // Example title
        },
      },
  };

const ReactBarChart = ({width="600px",height="400px",data=defaultData,options=defaultOptions}:IBarChart) => {
    useEffect(() => {
        return () => {
          // Clean up the chart instance on component unmount
          ChartJS.getChart('chartCanvasId')?.destroy();
        };
      }, []);

    return (
      <div style={{ width: width, height: height }}>
        <Bar data={data} options={options} />
      </div>
    );
}

export default ReactBarChart;
