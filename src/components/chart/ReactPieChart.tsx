import { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

interface IPieChart {
  /**
   * Width of the chart container. Defaults to '400px'.
   * 
   * @default '400px'
   */
  width?: string;

  /**
   * Height of the chart container. Defaults to '600px'.
   * 
   * @default '600px'
   */
  height?: string;

  /**
   * Data to be displayed by the pie chart, following Chart.js structure.
   * 
   * @default defaultData
   */
  data?: ChartData<'pie'>;

  /**
   * Chart options for customizing the appearance and behavior of the pie chart.
   * 
   * @default defaultOptions
   */
  options?: ChartOptions<'pie'>;
}
 /**
 * Default chart data used if no `data` prop is passed.
 */
const defaultData:ChartData<'pie'> = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

 /**
 * Default chart options used if no `options` prop is passed.
 */
const defaultOptions:ChartOptions<'pie'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    tooltip: {
      enabled: true,
    },
  },
};

/**
 * React component to display a customizable pie chart using Chart.js.
 *
 * @param width - The width of the chart container.
 * @param height - The height of the chart container.
 * @param data- The data for the pie chart.
 * @param options- The chart options for customizing its appearance.
 *
 * @returns {JSX.Element} A Pie chart rendered within a container.
 *
 * @remarks
 * This component uses the `useEffect` hook to clean up the chart instance when the component unmounts.
 */


const ReactPieChart = ({width="400px",height="600px",data=defaultData,options=defaultOptions}:IPieChart) => {
   

    useEffect(() => {
      return () => {
        ChartJS.getChart('chartCanvasId')?.destroy();
      };
    }, []);

    return (
      <div style={{ width: width, height: height }}> {/* Adjust size as needed */}
       
        <Pie data={data} options={options} />
      </div>
    );
}

export default ReactPieChart;

