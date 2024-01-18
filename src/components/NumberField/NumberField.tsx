import styles from "./NumberField.module.scss";

interface NumberFieldProps {
  name: string;
  label: string;
}

export const NumberField = ({ name, label }: NumberFieldProps) => (
  <div className={styles.formGroup}>
    <label htmlFor={name} className={styles.formGroupTitle}>
      {label}
    </label>
    <div className={styles.formInputWrapper}>
      <input
        type="number"
        className={styles.numberField}
        min={0}
        name="bill"
        id={name}
        placeholder="0"
      />
    </div>
  </div>
);
