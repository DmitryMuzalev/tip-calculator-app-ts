import { Form } from "components/Form";
import styles from "./Calculator.module.scss";
import { Result } from "components/Result";
import { useEffect, useState } from "react";

interface CalculatorProps {}

export const Calculator = ({}: CalculatorProps) => {
  //_State:

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
    persons,
    customTip,
    currPercentage,
    changeCustomTip: setCustomTip,
    changeBill: setBill,
    changeNumberPersons: setPersons,
    changeCurrPercentage: setCurrPercentage,
    tipPercentageList,
  };

  return (
    <div className={styles.calculator}>
      <Form state={state} />
      <Result
        bill={+bill}
        currPercentage={currPercentage}
        persons={+persons}
        cb={resetCalculator}
      />
    </div>
  );
};
