import {useContext} from "react";
import {CalculatorContext} from "../context/CalculatorContext.jsx";

function CalculatorTotal() {

  const { total } = useContext(CalculatorContext);

  return (
    <div>
      <p className="calctotal">{total}</p>
    </div>
  );
}

export default CalculatorTotal;