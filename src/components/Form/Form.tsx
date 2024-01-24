import styles from "./Form.module.scss";
import { ReactComponent as DollarIcon } from "assets/icon-dollar.svg";
import { ReactComponent as PersonIcon } from "assets/icon-person.svg";
import { FormInput } from "components/FormInput";
import { SelectTip } from "components/SelectTip";

import { AppState } from "types";

interface FormProps {
  state: AppState;
}

export const Form = ({ state }: FormProps) => {
  return (
    <div className={styles.form}>
      <FormInput
        name="bill"
        label="Bill"
        cb={state.changeBill}
        placeholder="0"
        value={state.bill}
        Icon={DollarIcon}
      />
      <SelectTip
        tipPercentageList={state.tipPercentageList}
        currPercentage={state.currPercentage}
        changeCustomTip={state.changeCustomTip}
        changeCurrPercentage={state.changeCurrPercentage}
        customTip={state.customTip}
      />
      <FormInput
        name="numberPersons"
        label="Number of People"
        cb={state.changeNumberPersons}
        placeholder="0"
        value={state.persons}
        Icon={PersonIcon}
      />
    </div>
  );
};
