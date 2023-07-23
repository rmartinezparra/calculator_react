import {useState} from "react";

function useCalculator() {

  const [total, setTotal] = useState("0");
  const [sign, setSign] = useState("");
  const [firstNum, setFirstNum] = useState(true);
  const [operationTotal, setOperationTotal] = useState(0);

  function add(id) {

    if (firstNum) {
      setFirstNum(false);
      setTotal(id);
      return;
    }

    setTotal(total.concat(id));
  }

  function removeNumber() {
    let calc = total.slice(0, -1);

    if (calc.length === 0) {
      setTotal("0");
      setFirstNum(true);
      return;
    }

    setTotal(calc);
  }

  function addSign(id) {

    const operation = calcOperation(sign, total);
    setOperationTotal(operation);
    setTotal("0");
    setFirstNum(true);
    setSign(id);

  }

  function calcOperation(sign, total) {
    let operation;
    switch (sign) {
      case "/":
        operation = operationTotal / parseFloat(total);
        break;
      case "*":
        operation = operationTotal * parseFloat(total);
        break;
      case "-":
        operation = operationTotal - parseFloat(total);
        break;
      case "+":
        operation = operationTotal + parseFloat(total);
        break;
      default:
        operation = parseFloat(total);
        break;
    }
    return operation;
  }

  function reset() {
    setTotal("0");
    setFirstNum(true);
    setSign("");
    setOperationTotal(0);
  }

  function calcTotal() {
    const operation = calcOperation(sign, total);
    reset();
    setTotal(operation);
  }

  function changeSign() {
    let strTotal;
    let parsedTotal = parseFloat(total);

    if (Math.sign(parsedTotal) == 1 || Math.sign(parsedTotal) == -1) {
      strTotal = (parsedTotal*-1).toString();
      setTotal(strTotal);
    }
  }

  return {
    total,
    sign,
    add,
    removeNumber,
    addSign,
    operationTotal,
    reset,
    calcTotal,
    changeSign
  }
}

export default useCalculator;