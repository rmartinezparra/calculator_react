import { useContext } from "react";
import {CalculatorContext} from "../context/CalculatorContext.jsx";

function CalculatorButtonTotal({id}) {
  const { calcTotal } = useContext(CalculatorContext);
  return (
    <button className="calcbutton buttonlittle buttonOperator" onClick={ev => calcTotal()}>{id}</button>
  );
}

export default CalculatorButtonTotal;