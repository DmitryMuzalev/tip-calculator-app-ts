import styles from "./Form.module.scss";

interface FormProps {}

export const Form = ({}: FormProps) => {
  return (
    <form className={styles.form}>
      <label htmlFor="bill" className={styles.formItem}>
        <div className={styles.formItemTitle}>
          <span>Bill</span>
          <span className={styles.error}>Error</span>
        </div>
        <input
          className={styles.formItemField}
          type="text"
          id="bill"
          placeholder="0"
        />
      </label>
      <div className={styles.formItem}>
        <div className={styles.formItemTitle}>Select Tip %</div>
        <ul>
          <li>
            <label htmlFor="tip5">
              <input type="radio" value={5} id="tip5" name="selectTip" />
              5%
            </label>
          </li>
          <li>
            <label htmlFor="tip5">
              <input type="radio" value={10} id="tip5" name="selectTip" />
              10%
            </label>
          </li>
          <li>
            <label htmlFor="tip5">
              <input type="radio" value={15} id="tip5" name="selectTip" />
              15%
            </label>
          </li>
          <li>
            <label htmlFor="tip5">
              <input type="radio" value={25} id="tip5" name="selectTip" />
              25%
            </label>
          </li>
          <li>
            <label htmlFor="tip5">
              <input type="radio" value={50} id="tip5" name="selectTip" />
              50%
            </label>
          </li>
          <li>custom</li>
          {/* custom */}
        </ul>
      </div>
      <label htmlFor="personCount" className={styles.formItem}>
        <div className={styles.formItemTitle}>
          <span>Number of People</span>
          <span>Error</span>
        </div>
        <input type="text" id="personCount" placeholder="0" />
      </label>
    </form>
  );
};
