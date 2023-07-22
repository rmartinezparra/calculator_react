import {useContext} from "react";
import {CalculatorContext} from "../context/CalculatorContext.jsx";

function CalculatorButton({id}) {

  const { add } = useContext(CalculatorContext);

  return (
    <div>
      {/*{
        0 == id ? <button className="calcbutton buttonbig" onClick={ev => add(id)}>{id}</button>
                : <button className="calcbutton buttonlittle" onClick={ev => add(id)}>{id}</button>
      }*/}
      {
        id != 0 ? <button className="calcbutton buttonlittle" onClick={ev => add(id)}>{id}</button>
                 : <button className="calcbutton buttonbig" onClick={ev => add(id)}>{id}</button>
      }
    </div>
  );
}

export default CalculatorButton;