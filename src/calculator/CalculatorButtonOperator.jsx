import { useContext } from "react";
import {CalculatorContext} from "../context/CalculatorContext.jsx";

function CalculatorButtonOperator({id}) {
  const { addSign, calcTotal } = useContext(CalculatorContext);

  const switchRender = () => {
    switch(id) {
      case "=":
        return <button className="calcbutton buttonlittle buttonOperator" onClick={ev => calcTotal()}>{id}</button>;
      default:
        return <button className="calcbutton buttonlittle buttonOperator" onClick={ev => addSign(id)}>{id}</button>;
    }
  }

  return (
    <div>
      {
        switchRender()
      }
    </div>
  );
}

export default CalculatorButtonOperator;