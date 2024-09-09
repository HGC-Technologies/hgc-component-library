# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```





## Download the custom component package
 npm i https://github.com/HGC-Technologies/hgc-component-library.git


## import the package
import {ReactPieChart} from "hgc-component-library"
import {ReactBarChart} from "hgc-component-library"

## how to use ReactBarChart and ReactPieChart Component

Open hgc-component-library project and check App.tsx file to look for BarChartData, BarChartOptions ,PieChartData ,PieChartOptions those are the data example with comments to take a reference .

## Create documentation

To generate necessary documentation, run the following command:
`npm run doc`

## ReactBarChart props format

need four optional props(params) to control dimension and chart data ,without passing those props , all will go with the default setting.

width:string 
height:string 
data:object 
options:object 

## reactbarchart data example

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


## reactbarchart options example

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

## ReactBarChart use case

<ReactBarChart width={'600px'} height={'400px'}  data={BarChartData} options={BarChartOptions} />



## ReactPieChart props format

need four optional props(params) to control dimension and chart data ,without passing those props , all will go with the default setting.

width:string 
height:string 
data:object 
options:object 

## reactpiechart data example

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


## reacpiechart options example

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

## ReactPieChart use case

<ReactPieChart width={'400px'} height={'600px'} data={PieChartData} options={PieChartOptions} />