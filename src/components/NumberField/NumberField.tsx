import { Icon } from "types";
import styles from "./NumberField.module.scss";

interface NumberFieldProps {
  name: string;
  placeholder: string;
  Icon?: Icon;
  classes?: string;
}

export const NumberField = ({
  name,
  placeholder,
  Icon,
  classes,
}: NumberFieldProps) => (
  <div className={`${styles.numberField} ${classes ? classes : ""}`}>
    <input
      type="number"
      className={styles.numberFieldInput}
      min={0}
      name={name}
      id={name}
      placeholder={placeholder}
    />
    {Icon && <Icon />}
  </div>
);
