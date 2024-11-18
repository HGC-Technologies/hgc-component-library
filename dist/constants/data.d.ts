import { ChartOptions, ChartData } from 'chart.js';
export declare const BarChartData: {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string;
        borderColor: string;
        borderWidth: number;
    }[];
};
export declare const BarChartOptions: {
    indexAxis: "y";
    scales: {
        x: {
            beginAtZero: boolean;
            grid: {
                display: boolean;
            };
            ticks: {
                font: {
                    family: string;
                    size: number;
                    weight: "normal";
                };
            };
        };
        y: {
            grid: {
                display: boolean;
            };
            ticks: {
                font: {
                    family: string;
                    size: number;
                    weight: "normal";
                };
            };
        };
    };
    plugins: {
        legend: {
            display: boolean;
            position: "bottom";
            labels: {
                font: {
                    family: string;
                    size: number;
                    weight: "normal";
                };
            };
        };
        title: {
            display: boolean;
            text: string;
            position: "top";
            font: {
                family: string;
                size: number;
                weight: "normal";
            };
        };
        datalabels: {
            anchor: string;
            align: string;
            color: string;
            formatter: (value: any) => any;
        };
    };
};
export declare const PieChartData: {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string[];
        borderColor: string[];
        borderWidth: number;
    }[];
};
export declare const PieChartOptions: {
    responsive: boolean;
    plugins: {
        legend: {
            position: "right";
            labels: {
                font: {
                    family: string;
                    size: number;
                    weight: "normal";
                };
            };
        };
        tooltip: {
            enabled: boolean;
            bodyFont: {
                family: string;
                size: number;
                weight: "normal";
            };
            titleFont: {
                family: string;
                size: number;
                weight: "normal";
            };
        };
    };
};
export declare const BarLineData: ChartData<'bar' | 'line'>;
export declare const BarLineOptions: ChartOptions<'bar' | 'line'>;
