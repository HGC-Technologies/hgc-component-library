import { ChartOptions, ChartData } from "chart.js";

export const BarChartData= {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July',"August",'September','October','November','December'],
    datasets: [
      //if adding more datasets , bars will appear side by side
      {
        label: 'My First Dataset',
        
        data: [65, 59, 80, 81, 56, 55, 40,120,50,80,69,56],
        backgroundColor:'rgba(75, 192, 192, 0.2)',
        borderColor:'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      
      
    ]
  };

  export const BarChartOptions= {
    indexAxis: "y" as const,//y stands for horizontal x stands for vertical
    scales: {
        x: { 
          beginAtZero: true,
          grid: {
            display: false // This removes the grid lines on the x-axis
          },
          ticks: {
            font: {
              family: 'Lufga, sans-serif', // Apply custom font
              size: 14, // Adjust the size as needed
              weight: 'normal' as const, // Use 100,300,400,500,700,900 'normal' "bold"
              
            },
          },
        },
        y: {
          grid: {
            display: false // This removes the grid lines on the y-axis
          },
          ticks: {
            font: {
              family: 'Lufga, sans-serif', // Apply custom font
              size: 14, // Adjust the size as needed
              weight: 'normal' as const, // Use 100,300,400,500,700,900 'normal' "bold"
            
            },
          },
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom' as const, // Change legend position to 'top', 'left', 'bottom', or 'right'
          labels: {
            font: {
              family: 'Lufga, sans-serif', // Apply custom font
              size: 16, // Adjust the size as needed
              weight: 'normal' as const, // Use 100,300,400,500,700,900 'normal' "bold"
            },
          },
        },
        title: {
          display: true,
          text: 'Custom Bar Chart', // Example title
          position:'top' as const,//top right bottom left center
          font: {
            family: 'Lufga, sans-serif', // Apply custom font
            size: 18, // Adjust the size as needed
            weight: 'normal' as const, // Use 100,300,400,500,700,900 'normal' "bold"
          },
        },
        datalabels: { // Configuration for data labels
          anchor: 'end',
          align:'end',
//           The label box alignment relative to anchor that can be expressed either by a number representing the clockwise angle (in degree) or a by one of the following string presets:
//            'start': before the anchor point, following the same direction
//            'end': after the anchor point, following the same direction
//            'center': centered on the anchor point
//            'right': 0°
//            'bottom': 90°
//            'left': 180°
//            'top': 270°
          color: '#000',
          formatter: (value:any) => value.toString(), // This will show the actual value
        },
      },
  };

export const PieChartData= {
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

export const PieChartOptions= {
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,//top right bottom left center
      labels: {
        font: {
          family: 'Lufga, sans-serif', // Apply custom font
          size: 14, // Adjust the size as needed
          weight: 'normal' as const, // Use 100,300,400,500,700,900 'normal' "bold"
          
        },
      },
    },
    tooltip: {
      enabled: true,
      bodyFont: {
        family: 'Lufga, sans-serif', // Apply custom font
        size: 12, // Adjust the size as needed
        weight: 'normal' as const, // Use 100,300,400,500,700,900 'normal' "bold"
      },
      titleFont: {
        family: 'Lufga, sans-serif', // Apply custom font
        size: 14, // Adjust the size as needed
        weight: 'normal' as const, // Use 100,300,400,500,700,900 'normal' "bold"
      },
    },
  },
};

export const BarLineData: ChartData<'bar' | 'line'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        type: 'line',
        label: 'Dataset 1',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2,
        fill: false,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: 'rgb(255, 99, 132)',
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: 'white',
        borderWidth: 2,
      }
    ],
  };

  export const BarLineOptions: ChartOptions<'bar' | 'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Combo Bar-Line Chart Example',
      },
    },
  };