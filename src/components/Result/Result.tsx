import { useEffect, useState } from "react";
import styles from "./Result.module.scss";

interface ResultProps {
  bill: number;
  currPercentage: number;
  persons: number;
  cb: () => void;
}

export const Result = ({ bill, currPercentage, persons, cb }: ResultProps) => {
  const [total, setTotal] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);

  useEffect(() => {
    if (bill && currPercentage && persons) {
      setTipAmount((bill * currPercentage) / persons);
      setTotal(bill / persons + tipAmount);
    } else {
      setTipAmount(0);
      setTotal(0);
    }
  }, [bill, currPercentage, persons, tipAmount]);

  return (
    <div className={styles.result}>
      <div className={styles.resultInfo}>
        <div className={styles.resultRow}>
          <div className={styles.resultLabel}>
            <p>Tip Amount</p>
            <span>/ person</span>
          </div>
          <div className={styles.resultValue}>$0.00</div>
        </div>
        <div className={styles.resultRow}>
          <div className={styles.resultLabel}>
            <p>Total</p>
            <span>/ person</span>
          </div>
          <div className={styles.resultValue}>$0.00</div>
        </div>
      </div>
      <button className={styles.btnReset} onClick={cb}>
        reset
      </button>
    </div>
  );
};
