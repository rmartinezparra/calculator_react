import CalculatorButton from "./CalculatorButton.jsx";
import CalculatorButtonRemove from "./CalculatorButtonRemove.jsx";
import CalculatorButtonTotal from "./CalculatorButtonTotal.jsx";
import CalculatorButtonOperator from "./CalculatorButtonOperator.jsx";
import CalculatorButtonFunction from "./CalculatorButtonFunction.jsx";

function CalculatorView() {

  return (
    <div className="bodyCalc">
      <table>
        <tbody>
          <tr>
            <td><CalculatorButtonRemove id={"AC"}/></td>
            <td><CalculatorButtonFunction id={"+/-"}/></td>
            <td><CalculatorButtonFunction id={"%"}/></td>
            <td><CalculatorButtonOperator id={"/"}/></td>
          </tr>
          <tr>
            <td><CalculatorButton id={"7"}/></td>
            <td><CalculatorButton id={"8"}/></td>
            <td><CalculatorButton id={"9"}/></td>
            <td><CalculatorButtonOperator id={"*"}/></td>
          </tr>
          <tr>
            <td><CalculatorButton id={"4"}/></td>
            <td><CalculatorButton id={"5"}/></td>
            <td><CalculatorButton id={"6"}/></td>
            <td><CalculatorButtonOperator id={"-"}/></td>
          </tr>
          <tr>
            <td><CalculatorButton id={"1"}/></td>
            <td><CalculatorButton id={"2"}/></td>
            <td><CalculatorButton id={"3"}/></td>
            <td><CalculatorButtonOperator id={"+"}/></td>
          </tr>
          <tr>
            <td colSpan="2"><CalculatorButton id={"0"}/></td>
            <td><CalculatorButton id={"."}/></td>
            <td><CalculatorButtonTotal id={"="}/></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CalculatorView;