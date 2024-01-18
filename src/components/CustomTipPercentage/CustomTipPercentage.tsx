import styles from "./CustomTipPercentage.module.scss";

interface CustomTipPercentageProps {}

export const CustomTipPercentage = ({}: CustomTipPercentageProps) => (
  <div className={styles.customTipPercentage}>
    <input
      type="number"
      className={styles.numberField}
      min={0}
      max={100}
      name="tip"
      id="tipCustom"
      placeholder="Custom "
    />
  </div>
);
