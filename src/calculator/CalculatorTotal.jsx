import {useContext} from "react";
import {CalculatorContext} from "../context/CalculatorContext.jsx";

function CalculatorTotal() {

  const { total, sign } = useContext(CalculatorContext);

  return (
    <div className="containerTotal">
      <span className="calctotal">{sign}</span>
      <span className="calctotal">{total}</span>
    </div>
  );
}

export default CalculatorTotal;