import BellSvg from "../../assets/svg/bell.svg";
import { MetricsMessage } from "../MetricsMessage/MetricsMessage";
import styles from "./MetricsAlert.module.css";

export const MetricsAlert = () => {
  return (
    <div className={styles.container}>
      <MetricsMessage />
      <div className={styles.bellContainer}>
        <img src={BellSvg} alt="Bell icon" />
      </div>
    </div>
  );
};
