import { useContext } from "react";
import {CalculatorContext} from "../context/CalculatorContext.jsx";

function CalculatorButtonRemove({id}) {
  const { removeNumber } = useContext(CalculatorContext);
  return (
    <button className="calcbutton buttonlittle" onClick={ ev => removeNumber()}>{id}</button>
  );
}

export default CalculatorButtonRemove;