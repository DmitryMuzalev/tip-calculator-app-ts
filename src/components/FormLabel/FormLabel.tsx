import styles from "./FormLabel.module.scss";

interface FormLabelProps {
  id: string;
  label: string;
  hasError?: boolean;
  errorMessage?: string;
}

export const FormLabel = ({
  id,
  label,
  hasError,
  errorMessage,
}: FormLabelProps) => (
  <div className={styles.formLabel}>
    <label htmlFor={id} className={styles.title}>
      {label}
    </label>
    {hasError && <span className={styles.error}>{errorMessage}</span>}
  </div>
);
