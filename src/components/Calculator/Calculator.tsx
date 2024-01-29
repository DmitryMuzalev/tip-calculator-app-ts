import { Form } from "components/Form";
import styles from "./Calculator.module.scss";
import { Result } from "components/Result";

export const Calculator = () => {
  return (
    <div className={styles.calculator}>
      <Form />
      <Result />
    </div>
  );
};
