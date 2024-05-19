import styles from "./MetricsMessage.module.css";

interface Props {
  metricsMessage: string;
}

export const MetricsMessage: React.FC<Props> = ({ metricsMessage }) => {
  return (
    <div className={styles.container}>
      <span>¡{metricsMessage}!</span>
    </div>
  );
};
