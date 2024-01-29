import { createContext, useEffect, useState } from "react";

import { AppState } from "types";

export const Context = createContext<AppState | null>(null);

type ContextProviderProps = {
  children: React.ReactNode;
};

export function ContextProvider(props: ContextProviderProps) {
  const tipPercentageList = [0.05, 0.1, 0.15, 0.25, 0.5];
  const [bill, setBill] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [persons, setPersons] = useState("");
  const [currPercentage, setCurrPercentage] = useState(0);

  useEffect(() => {
    if (customTip !== "") {
      setCurrPercentage(+customTip / 100);
    }
  }, [customTip]);

  const resetCalculator = () => {
    setBill("");
    setCustomTip("");
    setPersons("");
    setCurrPercentage(0);
  };

  const state = {
    bill,
    setBill,
    persons,
    setPersons,
    customTip,
    setCustomTip,
    currPercentage,
    setCurrPercentage,
    tipPercentageList,
    resetCalculator,
  };

  return <Context.Provider value={state}>{props.children}</Context.Provider>;
}
