import styles from "./Form.module.scss";
import { ReactComponent as DollarIcon } from "assets/icon-dollar.svg";
import { ReactComponent as PersonIcon } from "assets/icon-person.svg";
import { CbChanges } from "components/Calculator";

interface FormProps {
  bill: number;
  percentage: number;
  amountPersons: number;
  changeBill: CbChanges;
  changeAmountPersons: CbChanges;
  changePercentage: CbChanges;
}

export const Form = ({
  bill,
  amountPersons,
  percentage,
  changeBill,
  changeAmountPersons,
  changePercentage,
}: FormProps) => {
  const handlerInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    cb: CbChanges
  ) => {
    const value = +e.target.value;
    cb(value);
  };

  return (
    <div className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="bill" className={styles.formGroupTitle}>
          Bill
        </label>
        <div className={styles.formInputWrapper}>
          <input
            type="number"
            min={0}
            name="bill"
            id="bill"
            placeholder="0"
            onChange={(e) => handlerInput(e, changeBill)}
            value={bill}
          />
          <DollarIcon />
        </div>
      </div>
      <div className={styles.formGroup}>
        <p className={styles.formGroupTitle}>Select Tip %</p>
        <div className={styles.tipSelect}>
          <div className={styles.tip}>
            <input type="radio" name="tip" value={0.05} />
            <div className={styles.tipBtn}>5%</div>
          </div>
          <div className={styles.tip}>
            <input type="radio" name="tip" value={0.1} />
            <div className={styles.tipBtn}>10%</div>
          </div>
          <div className={styles.tip}>
            <input type="radio" name="tip" value={0.15} />
            <div className={styles.tipBtn}>15%</div>
          </div>
          <div className={styles.tip}>
            <input type="radio" name="tip" value={0.25} />
            <div className={styles.tipBtn}>25%</div>
          </div>
          <div className={styles.tip}>
            <input type="radio" name="tip" value={0.5} />
            <div className={styles.tipBtn}>50%</div>
          </div>
          <div className={styles.tipCustom}>
            <input
              type="number"
              min={0}
              max={100}
              name="tip"
              id="tipCustom"
              placeholder="Custom "
              onChange={(e) => handlerInput(e, changePercentage)}
              value={percentage}
            />
          </div>
        </div>
      </div>
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
            min={0}
            name="person"
            id="person"
            placeholder="0"
            onChange={(e) => handlerInput(e, changeAmountPersons)}
            value={amountPersons}
          />
          <PersonIcon />
        </div>
      </div>
    </div>
  );
};
