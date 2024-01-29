import { useAppContext } from "hook/useAppContext";
import styles from "./TipPercentage.module.scss";

interface TipPercentageProps {
  id: number;
  percent: number;
}

export const TipPercentage = ({ id, percent }: TipPercentageProps) => {
  const { currPercentage, setCurrPercentage, setCustomTip } = useAppContext();

  return (
    <div className={styles.tipPercentage}>
      <input
        type="radio"
        name="tipPercentage"
        id={`tipPercentage_${id}`}
        value={percent}
        checked={percent === currPercentage}
        onChange={() => {
          setCurrPercentage(percent);
          setCustomTip("");
        }}
      />
      <label htmlFor={`tipPercentage_${id}`}>{`${percent * 100}%`}</label>
    </div>
  );
};
