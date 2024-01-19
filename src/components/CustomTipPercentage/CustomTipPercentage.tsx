import { NumberField } from "components/NumberField";
import styles from "./CustomTipPercentage.module.scss";

interface CustomTipPercentageProps {}

export const CustomTipPercentage = ({}: CustomTipPercentageProps) => (
  <NumberField
    name="customTipPercentage"
    placeholder="Custom"
    classes={styles.customTipPercentage}
  />
);
