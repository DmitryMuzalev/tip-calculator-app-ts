import { Form } from "components/Form";
import styles from "./Calculator.module.scss";
import { Result } from "components/Result";

interface CalculatorProps {}

export const Calculator = ({}: CalculatorProps) => {
  /* 
     const [bill, setBill] = useState(0);
     const [selectTip, setSelectTip] = useState(0);
     const [personsCount, setPersonsCount] = useState(0);
     const [tipAmount, setTipAmount] = useState(0);
     const [total, setTotal] = useState(0); 
  */

  return (
    <div className={styles.calculator}>
      <Form />
      <Result />
    </div>
  );
};
