import { ChartData, ChartOptions } from 'chart.js';
interface IPieChart {
    width?: string;
    height?: string;
    data?: ChartData<'pie'>;
    options?: ChartOptions<'pie'>;
}
declare const ReactPieChart: ({ width, height, data, options }: IPieChart) => import("react/jsx-runtime").JSX.Element;
export default ReactPieChart;
