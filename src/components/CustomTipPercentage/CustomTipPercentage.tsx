import { NumberField } from "components/NumberField";
import styles from "./CustomTipPercentage.module.scss";
import { AppState } from "types";

interface CustomTipPercentageProps
  extends Pick<AppState, "customTip" | "changeCustomTip"> {}

export const CustomTipPercentage = ({
  changeCustomTip,
  customTip,
}: CustomTipPercentageProps) => (
  <NumberField
    name="customTipPercentage"
    placeholder="Custom"
    classes={styles.customTipPercentage}
    value={customTip}
    cb={changeCustomTip}
  />
);
