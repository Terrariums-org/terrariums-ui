import styles from "./AlertAction.module.css";

interface Props {
  message: string;
  isValid: boolean;
}

export const AlertAction: React.FC<Props> = ({ message, isValid }) => {
  
  return (
    <div
      className={`${styles.container} ${
        isValid ? styles.successful : styles.error
      }`}
    >
      <span>{message}</span>
    </div>
  );
};
