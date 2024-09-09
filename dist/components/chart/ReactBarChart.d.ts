import { ChartData, ChartOptions } from 'chart.js';
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
    options?: ChartOptions<'bar'>;
}
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
declare const ReactBarChart: ({ width, height, data, options }: IBarChart) => import("react/jsx-runtime").JSX.Element;
export default ReactBarChart;
