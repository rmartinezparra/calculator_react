import './App.css'
import CalculatorView from "./calculator/CalculatorView.jsx";
import {CalculatorProvider} from "./context/CalculatorContext.jsx";
import CalculatorTotal from "./calculator/CalculatorTotal.jsx";
import CalculatorHistory from "./calculator/CalculatorHistory.jsx";

function App() {

  return (
    <div className="App center">
      <CalculatorProvider>
        <CalculatorHistory />
        <CalculatorTotal />
        <CalculatorView />
      </CalculatorProvider>
    </div>
  );
}

export default App
