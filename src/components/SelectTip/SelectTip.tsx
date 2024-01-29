import styles from "./SelectTip.module.scss";

import { FormLabel } from "components/FormLabel";
import { TipPercentage } from "components/TipPercentage";
import { NumberField } from "components/NumberField";

import { useState } from "react";

import { useAppContext } from "hook/useAppContext";

export const SelectTip = () => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { tipPercentageList, customTip, setCustomTip } = useAppContext();

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
    <div className={styles.selectTip}>
      <FormLabel
        id="customTipPercentage"
        label="Select Tip %"
        hasError={hasError}
        errorMessage={errorMessage}
      />
      <div className={styles.selectTipPercentage}>
        {tipPercentageList.map((t, i) => {
          return <TipPercentage key={i} id={i} percent={t} />;
        })}

        <NumberField
          name="customTipPercentage"
          placeholder="Custom"
          classes={styles.customTipPercentage}
          value={customTip}
          cb={setCustomTip}
          validationCb={validationInput}
          hasError={hasError}
        />
      </div>
    </div>
  );
};
