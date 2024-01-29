import styles from "./Result.module.scss";

import { useEffect, useState } from "react";

import { useAppContext } from "hook/useAppContext";

export const Result = () => {
  const [total, setTotal] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);

  const { bill, currPercentage, persons, resetCalculator } = useAppContext();

  useEffect(() => {
    if (bill && currPercentage && persons) {
      setTipAmount((+bill * currPercentage) / +persons);
      setTotal(+bill / +persons + tipAmount);
    } else {
      setTipAmount(0);
      setTotal(0);
    }
  }, [bill, currPercentage, persons, tipAmount]);

  const printUSD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className={styles.result}>
      <div className={styles.resultInfo}>
        <div className={styles.resultRow}>
          <div className={styles.resultLabel}>
            <p>Tip Amount</p>
            <span>/ person</span>
          </div>
          <div className={styles.resultValue}>{printUSD.format(tipAmount)}</div>
        </div>
        <div className={styles.resultRow}>
          <div className={styles.resultLabel}>
            <p>Total</p>
            <span>/ person</span>
          </div>
          <div className={styles.resultValue}>{printUSD.format(total)}</div>
        </div>
      </div>
      <button className={styles.btnReset} onClick={resetCalculator}>
        reset
      </button>
    </div>
  );
};
