import styles from "./TipPercentage.module.scss";

interface TipPercentageProps {
  id: number;
  percent: number;
}

export const TipPercentage = ({ id, percent }: TipPercentageProps) => (
  <div className={styles.tipPercentage}>
    <input
      type="radio"
      name="tipPercentage"
      id={`tipPercentage_${id}`}
      value={percent}
    />
    <label htmlFor={`tipPercentage_${id}`}>{`${percent * 100}%`}</label>
  </div>
);
