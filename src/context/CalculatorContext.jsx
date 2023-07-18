import { createContext } from "react";
import useCalculator from "../hooks/useCalculator.jsx";

export const CalculatorContext = createContext();

// eslint-disable-next-line react/prop-types
export function CalculatorProvider({children}) {

  const { total, add, calcTotal, removeNumber} = useCalculator();

  return (
    <CalculatorContext.Provider value={{total, add, calcTotal, removeNumber}}>
      {children}
    </CalculatorContext.Provider>
  );
}