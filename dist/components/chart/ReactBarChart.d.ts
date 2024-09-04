import { ChartData, ChartOptions } from 'chart.js';
interface IBarChart {
    width?: string;
    height?: string;
    data?: ChartData<'bar'>;
    options?: ChartOptions<'bar'>;
}
declare const ReactBarChart: ({ width, height, data, options }: IBarChart) => import("react/jsx-runtime").JSX.Element;
export default ReactBarChart;
