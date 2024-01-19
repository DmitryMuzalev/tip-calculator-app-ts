import styles from "./Form.module.scss";
import { ReactComponent as DollarIcon } from "assets/icon-dollar.svg";
import { ReactComponent as PersonIcon } from "assets/icon-person.svg";
import { CustomTipPercentage } from "components/CustomTipPercentage";
import { FormBlock } from "components/FormBlock";
import { NumberField } from "components/NumberField";
import { TipPercentage } from "components/TipPercentage";

interface FormProps {
  tipPercentageList: number[];
}

export const Form = ({ tipPercentageList }: FormProps) => {
  return (
    <div className={styles.form}>
      <FormBlock id="bill" label="Bill">
        <NumberField name="bill" placeholder="0" Icon={DollarIcon} />
      </FormBlock>

      <FormBlock id="customTipPercentage" label="Select Tip %">
        <div className={styles.selectTipPercentage}>
          {tipPercentageList.map((t, i) => {
            return <TipPercentage key={i} id={i} percent={t} />;
          })}
          <CustomTipPercentage />
        </div>
      </FormBlock>

      <FormBlock id="numberPersons" label="Number of People">
        <NumberField name="numberPersons" placeholder="0" Icon={PersonIcon} />
      </FormBlock>
    </div>
  );
};
