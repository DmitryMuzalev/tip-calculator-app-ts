import styles from "./Form.module.scss";
import { ReactComponent as DollarIcon } from "assets/icon-dollar.svg";
import { ReactComponent as PersonIcon } from "assets/icon-person.svg";
import { CustomTipPercentage } from "components/CustomTipPercentage";
import { TipPercentage } from "components/TipPercentage";

interface FormProps {
  tipPercentageList: number[];
}

export const Form = ({ tipPercentageList }: FormProps) => {
  return (
    <div className={styles.form}>
      {/* Bill */}
      <div className={styles.formGroup}>
        <label htmlFor="bill" className={styles.formGroupTitle}>
          Bill
        </label>
        <div className={styles.formInputWrapper}>
          <input
            type="number"
            className={styles.numberField}
            min={0}
            name="bill"
            id="bill"
            placeholder="0"
          />
          <DollarIcon />
        </div>
      </div>

      {/* Select Tip */}
      <div className={styles.formGroup}>
        <p className={styles.formGroupTitle}>Select Tip %</p>
        <div className={styles.tipSelect}>
          {tipPercentageList.map((t, i) => {
            return <TipPercentage percent={t} key={i} />;
          })}
          <CustomTipPercentage />
        </div>
      </div>

      {/* Number of People */}
      <div className={styles.formGroup}>
        <div className={styles.labelGroup}>
          <label htmlFor="person" className={styles.formGroupTitle}>
            Number of People
          </label>
          <span className={styles.error}>Can't be zero</span>
        </div>
        <div className={styles.formInputWrapper}>
          <input
            type="number"
            className={styles.numberField}
            min={0}
            name="person"
            id="person"
            placeholder="0"
          />
          <PersonIcon />
        </div>
      </div>
    </div>
  );
};
