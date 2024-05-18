import styles from "./MetricsContainer.module.css";

interface Props {
  temperature: number;
  humidity: number;
  uv: number;
}

export const MetricsContainer: React.FC<Props> = ({
  temperature,
  humidity,
  uv,
}) => {
  return (
    <div className={styles.containerMetrics}>
      <span className={styles.temperature}>
        Temperatura {""}
        <span>{temperature}°</span>
      </span>
      <span className={styles.humidity}>
        Humedad {""}
        <span>{humidity}%</span>
      </span>
      <span className={styles.uv}>
        Rayos UV {""}
        <span>{uv}</span>
      </span>
    </div>
  );
};
