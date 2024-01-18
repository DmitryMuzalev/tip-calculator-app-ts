import styles from "./TipPercentage.module.scss";

interface TipPercentageProps {
  percent: number;
}

export const TipPercentage = ({ percent }: TipPercentageProps) => (
  <div className={styles.tipPercentage}>
    <input type="radio" name="tipPercentage" value={percent} />
    <label className={styles.tipBtn}>{`${percent * 100}%`}</label>
  </div>
);
