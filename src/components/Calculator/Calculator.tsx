import { Form } from "components/Form";
import styles from "./Calculator.module.scss";
import { Result } from "components/Result";
import { useState } from "react";

interface CalculatorProps {}

export type CbChanges = (value: number) => void;

export const Calculator = ({}: CalculatorProps) => {
  const [bill, setBill] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [amountPersons, setAmountPersons] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const changeBill: CbChanges = (value) => {
    setBill(value);
  };

  const changeAmountPersons: CbChanges = (value) => {
    setAmountPersons(value);
  };

  const changePercentage: CbChanges = (value) => {
    setPercentage(value);
  };

  return (
    <div className={styles.calculator}>
      <Form
        bill={bill}
        percentage={percentage}
        amountPersons={amountPersons}
        changeBill={changeBill}
        changeAmountPersons={changeAmountPersons}
        changePercentage={changePercentage}
      />
      <Result tipAmount={tipAmount} total={total} />
    </div>
  );
};
