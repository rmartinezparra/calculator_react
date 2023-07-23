import { useContext } from "react";
import {CalculatorContext} from "../context/CalculatorContext.jsx";

function CalculatorHistory() {
  const { operationTotal } = useContext(CalculatorContext);

  return (
    <div className="calcHistory">
      <span className="calcNum">{operationTotal}</span>
    </div>
  );
}

export default CalculatorHistory;