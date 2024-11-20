import logo from './logo.svg';
import './App.css';
import ChartSelector from './ChartSelector';
import PieChartWithLegends from './PieChartWithLegends';

function App() {
  return (
    <div className="App">
      <ChartSelector/>
      <PieChartWithLegends/>
    </div>
  );
}

export default App;
