import { MetricsAlert } from "../../../../components/MetricsAlert/MetricsAlert";
import { TerrariumInput } from "../TerrariumInput/TerrariumInput";
import styles from "./HeaderList.module.css";

export const HeaderList = () => {
  return (
    <div className={styles.container}>
      <TerrariumInput />
      <MetricsAlert />
    </div>
  );
};
