import { Icon } from "types";
import styles from "./NumberField.module.scss";
import { useState } from "react";

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
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validationFn = (value: string) => {
    if (+value <= 100000 && +value > -1) {
      if (cb) {
        cb(value);
        if (+value === 0 && value !== "") {
          setHasError(true);
          setErrorMessage("Can't be zero");
        } else {
          setHasError(false);
          setErrorMessage("");
        }
      }
    }
  };

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
          validationFn(value);
        }}
      />
      {Icon && <Icon />}
    </div>
  );
};
