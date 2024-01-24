import styles from "./SelectTip.module.scss";
import { FormLabel } from "components/FormLabel";
import { TipPercentage } from "components/TipPercentage";
import { AppState } from "types";
import { NumberField } from "components/NumberField";
import { useState } from "react";

interface SelectTipProps
  extends Omit<
    AppState,
    "bill" | "persons" | "changeBill" | "changeNumberPersons"
  > {}

export const SelectTip = ({
  tipPercentageList,
  currPercentage,
  changeCurrPercentage,
  changeCustomTip,
  customTip,
}: SelectTipProps) => {
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
    <div className={styles.selectTip}>
      <FormLabel
        id="customTipPercentage"
        label="Select Tip %"
        hasError={hasError}
        errorMessage={errorMessage}
      />
      <div className={styles.selectTipPercentage}>
        {tipPercentageList.map((t, i) => {
          return (
            <TipPercentage
              key={i}
              id={i}
              percent={t}
              currPercentage={currPercentage}
              changeCurrPercentage={changeCurrPercentage}
              changeCustomTip={changeCustomTip}
            />
          );
        })}

        <NumberField
          name="customTipPercentage"
          placeholder="Custom"
          classes={styles.customTipPercentage}
          value={customTip}
          cb={changeCustomTip}
          validationCb={validationInput}
          hasError={hasError}
        />
      </div>
    </div>
  );
};
