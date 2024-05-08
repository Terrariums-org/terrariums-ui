import styles from "./ErrorMessage.module.css";
import warningSvg from "../../assets/svg/warning.svg";

interface Props {
  message: string;
}

export const ErrorMessage: React.FC<Props> = ({ message }) => {
  return (
    <div className={styles.containerError}>
      <img src={warningSvg} />
      <span>{message}</span>
    </div>
  );
};
