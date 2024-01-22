import { Icon } from "types";
import styles from "./NumberField.module.scss";

interface NumberFieldProps {
  name: string;
  placeholder: string;
  value: string;
  cb: (value: string) => void;
  Icon?: Icon;
  classes?: string;
}

export const NumberField = ({
  name,
  placeholder,
  value,
  cb,
  Icon,
  classes,
}: NumberFieldProps) => {
  return (
    <div className={`${styles.numberField} ${classes ? classes : ""}`}>
      <input
        type="number"
        className={styles.numberFieldInput}
        min={0}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          const value = e.target.value;
          if (cb) {
            cb(value);
          }
        }}
      />
      {Icon && <Icon />}
    </div>
  );
};
