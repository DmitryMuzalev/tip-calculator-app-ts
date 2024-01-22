import { AppState } from "types";
import styles from "./TipPercentage.module.scss";

interface TipPercentageProps
  extends Pick<
    AppState,
    "currPercentage" | "changeCurrPercentage" | "changeCustomTip"
  > {
  id: number;
  percent: number;
}

export const TipPercentage = ({
  id,
  percent,
  currPercentage,
  changeCurrPercentage,
  changeCustomTip,
}: TipPercentageProps) => {
  return (
    <div className={styles.tipPercentage}>
      <input
        type="radio"
        name="tipPercentage"
        id={`tipPercentage_${id}`}
        value={percent}
        checked={percent === currPercentage}
        onChange={() => {
          changeCurrPercentage(percent);
          changeCustomTip("");
        }}
      />
      <label htmlFor={`tipPercentage_${id}`}>{`${percent * 100}%`}</label>
    </div>
  );
};
