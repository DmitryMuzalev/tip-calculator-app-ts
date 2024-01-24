import { FormLabel } from "components/FormLabel";
import styles from "./FormInput.module.scss";
import { NumberField } from "components/NumberField";
import { Icon } from "types";
import { useState } from "react";

export interface FormInputProps {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  cb: (value: string) => void;
  Icon?: Icon;
}

export const FormInput = ({
  name,
  label,
  placeholder,
  Icon,
  value,
  cb,
}: FormInputProps) => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validationInput = (value: string) => {
    if (value !== "" && +value === 0) {
      setHasError(true);
      setErrorMessage("Can't be zero");
    } else {
      setHasError(false);
      setErrorMessage("");
    }
  };

  return (
    <div className={styles.formInput}>
      <FormLabel
        id={name}
        label={label}
        hasError={hasError}
        errorMessage={errorMessage}
      />
      <NumberField
        name={name}
        placeholder={placeholder}
        Icon={Icon}
        value={value}
        cb={cb}
        validationCb={validationInput}
        hasError={hasError}
      />
    </div>
  );
};
