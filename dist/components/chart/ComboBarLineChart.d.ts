import { default as React } from 'react';
import { ChartData, ChartOptions } from 'chart.js';
interface ComboBarLineChartProps {
    data: ChartData<'bar' | 'line'>;
    options?: ChartOptions<'bar' | 'line'>;
}
declare const ComboBarLineChart: React.FC<ComboBarLineChartProps>;
export default ComboBarLineChart;
