import BellSvg from "../../assets/svg/bell.svg";
import { MetricsMessage } from "../MetricsMessage/MetricsMessage";
import styles from "./MetricsAlert.module.css";

interface Props {
  metricsMessage: string;
}

export const MetricsAlert: React.FC<Props> = ({ metricsMessage }) => {
  return (
    <div className={styles.container}>
      <div className={styles.bellContainer}>
        <img src={BellSvg} alt="Bell icon" />
      </div>
      {metricsMessage !== "" && (
        <MetricsMessage metricsMessage={metricsMessage} />
      )}
    </div>
  );
};
