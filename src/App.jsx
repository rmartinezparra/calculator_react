import './App.css'
import CalculatorView from "./calculator/CalculatorView.jsx";
import {CalculatorProvider} from "./context/CalculatorContext.jsx";
import CalculatorTotal from "./calculator/CalculatorTotal.jsx";

function App() {

  return (
    <div className="App">
      <CalculatorProvider>
        <CalculatorTotal />
        <CalculatorView />
      </CalculatorProvider>
    </div>
  );
}

export default App
