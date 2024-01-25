import { createContext, useState } from "react";

export type AppStorage = {
  bill: string;
  persons: string;
  customTip: string;
  currPercentage: number;
  tipPercentageList: number[];
  //! setBill: (value: string) => void;
};

const Context = createContext<AppStorage | null>(null);

export function ContextProvider(children: React.ReactNode) {
  const tipPercentageList = [0.05, 0.1, 0.15, 0.25, 0.5];

  const [bill, setBill] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [persons, setPersons] = useState("");

  const [currPercentage, setCurrPercentage] = useState(0);

  const state = {
    bill,
    persons,
    customTip,
    currPercentage,
    tipPercentageList,
  };

  return <Context.Provider value={state}>{children}</Context.Provider>;
}
