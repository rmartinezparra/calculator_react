import { useState } from "react";

function useCalculator() {
  const [total, setTotal] = useState("0");
  const [firstNum, setFirstNum] = useState(true);

  function add(id) {

    if (firstNum) {
      setFirstNum(false);
      setTotal(id);
      return;
    }

    setTotal(total.concat(id));
  }

  function calcTotal() {
    let calc = parseFloat({total});
    setTotal(calc.toString());
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

  return {
    total,
    add,
    calcTotal,
    removeNumber
  }
}

export default useCalculator;