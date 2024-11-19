import { ChartData, ChartOptions } from 'chart.js';
interface ComboBarLineChartProps {
    data: ChartData<'bar' | 'line'> | any;
    options?: ChartOptions<'bar' | 'line'> | any;
}
export default function ComboBarLineChart({ data, options }: ComboBarLineChartProps): import("react/jsx-runtime").JSX.Element;
export {};
