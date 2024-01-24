import styles from "./NumberField.module.scss";
import { FormInputProps } from "components/FormInput";

interface NumberFieldProps extends Omit<FormInputProps, "label"> {
  classes?: string;
  hasError?: boolean;
  validationCb?: (value: string) => void;
}

export const NumberField = ({
  name,
  placeholder,
  value,
  cb,
  validationCb,
  Icon,
  classes,
  hasError,
}: NumberFieldProps) => {
  return (
    <div className={`${styles.numberField} ${classes ? classes : ""}`}>
      <input
        type="number"
        className={`${styles.numberFieldInput} ${
          hasError ? styles.numberFieldInputError : ""
        }`}
        min={0}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          const value = e.target.value;
          if (cb) {
            if (validationCb) {
              validationCb(value);
            }
            cb(value);
          }
        }}
      />
      {Icon && <Icon />}
    </div>
  );
};
