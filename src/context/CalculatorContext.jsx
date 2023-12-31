import { createContext } from "react";
import useCalculator from "../hooks/useCalculator.jsx";

export const CalculatorContext = createContext();

// eslint-disable-next-line react/prop-types
export function CalculatorProvider({children}) {

  const { total, sign, add, removeNumber, addSign, operationTotal, reset, calcTotal, changeSign} = useCalculator();

  return (
    <CalculatorContext.Provider value={{total, sign, add, removeNumber, addSign, operationTotal, reset, calcTotal, changeSign}}>
      {children}
    </CalculatorContext.Provider>
  );
}