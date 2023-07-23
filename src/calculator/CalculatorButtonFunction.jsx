import {useContext} from "react";
import {CalculatorContext} from "../context/CalculatorContext.jsx";

function CalculatorButtonFunction({id}) {
  const { changeSign, removeNumber, reset } = useContext(CalculatorContext);

  let renderSwitch = () => {
    switch(id) {
      case "+/-":
        return <button className="calcbutton buttonlittle buttonFunctions buttonFunc" onClick={ev => changeSign()}>{id}</button>;
      case "AC":
        return <button className="calcbutton buttonlittle buttonFunctions" onClick={ev => removeNumber()}>{id}</button>;
      case "R":
        return <button className="calcbutton buttonlittle buttonFunctions"  onClick={ev => reset()}>{id}</button>;
    }
  };

  return (
    <div>
      {
        renderSwitch(id)
      }
    </div>
    // <button className="calcbutton buttonlittle buttonFunctions" onClick={ev => add({id})}>{id}</button>
  );
}

export default CalculatorButtonFunction;