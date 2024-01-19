import { ReactNode } from "react";
import styles from "./FormBlock.module.scss";

interface FormBlockProps {
  id: string;
  label: string;
  children: ReactNode;
  hasError?: boolean;
  errorMessage?: string;
}

export const FormBlock = ({
  id,
  label,
  children,
  hasError,
  errorMessage,
}: FormBlockProps) => (
  <div className={styles.formBlock}>
    <div className={styles.formBlockLabel}>
      <label htmlFor={id} className={styles.title}>
        {label}
      </label>
      {hasError && <span className={styles.error}>{errorMessage}</span>}
    </div>
    {children}
  </div>
);
