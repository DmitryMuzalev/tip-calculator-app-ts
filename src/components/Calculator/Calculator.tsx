import { Form } from "components/Form";
import styles from "./Calculator.module.scss";
import { Result } from "components/Result";
import { useState } from "react";

interface CalculatorProps {}

export const Calculator = ({}: CalculatorProps) => {
  //_State:
  const tipPercentageList = [0.05, 0.1, 0.15, 0.25, 0.5];
  const [bill, setBill] = useState<number | undefined>(undefined);

  const state = {
    bill,
    changeBill: (value: number | undefined) => {
      setBill(value);
    },
    tipPercentageList,
  };

  return (
    <div className={styles.calculator}>
      <Form state={state} />
      <Result />
    </div>
  );
};
