import styles from "./Form.module.scss";
import { ReactComponent as DollarIcon } from "assets/icon-dollar.svg";
import { ReactComponent as PersonIcon } from "assets/icon-person.svg";
import { CustomTipPercentage } from "components/CustomTipPercentage";
import { FormBlock } from "components/FormBlock";
import { NumberField } from "components/NumberField";
import { TipPercentage } from "components/TipPercentage";
import { AppState } from "types";

interface FormProps {
  state: AppState;
}

export const Form = ({ state }: FormProps) => {
  return (
    <div className={styles.form}>
      <FormBlock id="bill" label="Bill">
        <NumberField
          name="bill"
          placeholder="0"
          Icon={DollarIcon}
          value={state.bill}
          cb={state.changeBill}
        />
      </FormBlock>

      <FormBlock id="customTipPercentage" label="Select Tip %">
        <div className={styles.selectTipPercentage}>
          {state.tipPercentageList.map((t, i) => {
            return (
              <TipPercentage
                key={i}
                id={i}
                percent={t}
                currPercentage={state.currPercentage}
                changeCurrPercentage={state.changeCurrPercentage}
                changeCustomTip={state.changeCustomTip}
              />
            );
          })}
          <CustomTipPercentage
            customTip={state.customTip}
            changeCustomTip={state.changeCustomTip}
          />
        </div>
      </FormBlock>

      <FormBlock id="numberPersons" label="Number of People">
        <NumberField
          name="numberPersons"
          placeholder="0"
          Icon={PersonIcon}
          value={state.persons}
          cb={state.changeNumberPersons}
        />
      </FormBlock>
    </div>
  );
};
