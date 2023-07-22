import { useContext } from "react";
import {CalculatorContext} from "../context/CalculatorContext.jsx";

function CalculatorButtonOperator({id}) {
  const { addSign } = useContext(CalculatorContext);
  return (
    <button className="calcbutton buttonlittle buttonOperator" onClick={ev => addSign(id)}>{id}</button>
  );
}

export default CalculatorButtonOperator;