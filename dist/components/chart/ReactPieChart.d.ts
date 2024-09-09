import { ChartData, ChartOptions } from 'chart.js';
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
declare const ReactPieChart: ({ width, height, data, options }: IPieChart) => import("react/jsx-runtime").JSX.Element;
export default ReactPieChart;
