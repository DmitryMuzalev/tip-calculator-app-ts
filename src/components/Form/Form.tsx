import styles from "./Form.module.scss";

import { ReactComponent as DollarIcon } from "assets/icon-dollar.svg";
import { ReactComponent as PersonIcon } from "assets/icon-person.svg";

import { FormInput } from "components/FormInput";
import { SelectTip } from "components/SelectTip";

import { useAppContext } from "hook/useAppContext";

export const Form = () => {
  const { bill, setBill, persons, setPersons } = useAppContext();

  return (
    <div className={styles.form}>
      <FormInput
        name="bill"
        label="Bill"
        cb={setBill}
        placeholder="0"
        value={bill}
        Icon={DollarIcon}
      />

      <SelectTip />

      <FormInput
        name="numberPersons"
        label="Number of People"
        cb={setPersons}
        placeholder="0"
        value={persons}
        Icon={PersonIcon}
      />
    </div>
  );
};
