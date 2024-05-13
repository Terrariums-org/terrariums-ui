import styles from "./ButtonAction.module.css";

interface Props {
  buttonName: string;
  handleClick?: () => void;
}

export const ButtonAction: React.FC<Props> = ({
  buttonName,
  handleClick = () => {},
}) => {
  return (
    <button className={styles.button} type="submit" onClick={handleClick}>
      {buttonName}
    </button>
  );
};
