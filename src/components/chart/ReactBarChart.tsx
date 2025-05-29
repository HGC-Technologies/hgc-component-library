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
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

 

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;

type FlexibleChartOptions = DeepPartial<ChartOptions<'bar'>> & {
  indexAxis?: 'x' | 'y',
  responsive?: boolean,
  plugins?: {
    [key: string]: any;
  };
};

// export type ExtendedChartOptions = DeepPartial<ChartOptions<'bar'>> & {
//   plugins?: {
//     datalabels?: FlexibleChartOptions ;
//   };
// };


/**
 * Interface for ReactBarChart component props.
 */
interface IBarChart {
  /**
   * Width of the chart container. Defaults to '600px'.
   * 
   * @default '600px'
   */
  width?: string;

  /**
   * Height of the chart container. Defaults to '400px'.
   * 
   * @default '400px'
   */
  height?: string;

  /**
   * Data to be displayed by the chart, following Chart.js structure.
   * 
   * @default defaultData
   */
  data?: ChartData<'bar'>;

  /**
   * Chart options for customizing the appearance and behavior of the chart.
   * 
   * @default defaultOptions
   */
  options?: FlexibleChartOptions;
}



/**
 * Default chart data used when no data prop is passed.
 */
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
/**
 * Default chart options used when no options prop is passed.
 */
  const defaultOptions: FlexibleChartOptions = {
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
        datalabels: { // Configuration for data labels
          anchor: 'end',
          align:'end',
          color: '#000',
          formatter: (value:any) => value.toString(),// This will show the actual value
        },
      },
  };

/**
 * React component to display a customizable bar chart using Chart.js.
 * 
 * @params width - The width of the chart container (default: '600px').
 * @params height - The height of the chart container (default: '400px').
 * @params data - The data for the chart (default: defaultData).
 * @params options - options - The chart options (default: defaultOptions).
 * 
 * @returns A Bar chart rendered within a container.
 * 
 * @remarks
 * This component uses the `useEffect` hook to clean up the chart instance when the component unmounts.
 */
const ReactBarChart = ({width="600px",height="400px",data=defaultData,options=defaultOptions}:IBarChart) => {
    useEffect(() => {
        return () => {
          // Clean up the chart instance on component unmount
          ChartJS.getChart('chartCanvasId')?.destroy();
        };
      }, []);

    return (
      <div style={{ width: width, height: height }}>
        <Bar data={data} options={options as ChartOptions<'bar'>} />
      </div>
    );
}

export default ReactBarChart;
