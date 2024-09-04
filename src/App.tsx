

import './App.css'
import ReactBarChart from './components/chart/ReactBarChart'
import ReactPieChart from './components/chart/ReactPieChart'

function App() {
  const BarChartData= {
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

  const BarChartOptions= {
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
      },
  };

  const PieChartData= {
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

const PieChartOptions= {
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

  return (
    <>
   
    <ReactBarChart width={'100%'} height={'400px'}  data={BarChartData} options={BarChartOptions}/>
     
    <ReactPieChart width={'400px'} height={'600px'} data={PieChartData} options={PieChartOptions}/>
     
    
     
    </>
  )
}

export default App
