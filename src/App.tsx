

import './App.css'
import { ReactBarChart, ReactPieChart, ComboBarLineChart } from './components/chart'
import { BarChartOptions, BarChartData, PieChartData, PieChartOptions, BarLineData, BarLineOptions } from './constants/data';

function App() {


  return (
    <>
      <ReactBarChart width={'600px'} height={'400px'} data={BarChartData} options={BarChartOptions} />
      <ReactPieChart width={'400px'} height={'600px'} data={PieChartData} options={PieChartOptions} />
      <ComboBarLineChart data={BarLineData} options={BarLineOptions} />
    </>
  )
}

export default App
