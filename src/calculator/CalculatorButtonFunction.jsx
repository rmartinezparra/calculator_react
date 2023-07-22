import {useContext} from "react";
import {CalculatorContext} from "../context/CalculatorContext.jsx";

function CalculatorButtonFunction({id}) {
  const { add } = useContext(CalculatorContext);
  return (
    <button className="calcbutton buttonlittle buttonFunctions" onClick={ev => add({id})}>{id}</button>
  );
}

export default CalculatorButtonFunction;