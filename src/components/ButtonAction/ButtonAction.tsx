import styles from './ButtonAction.module.css'

interface Props {
  buttonName: string;
}

export const ButtonAction: React.FC<Props> = ({ buttonName }) => {
  return <button className={styles.button}>{buttonName}</button>;
};
