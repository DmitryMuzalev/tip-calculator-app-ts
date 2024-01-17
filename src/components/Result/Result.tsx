import styles from "./Result.module.scss";

interface ResultProps {
  tipAmount: number;
  total: number;
}

export const Result = ({ tipAmount, total }: ResultProps) => (
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
    <button className={styles.btnReset}>reset</button>
  </div>
);
