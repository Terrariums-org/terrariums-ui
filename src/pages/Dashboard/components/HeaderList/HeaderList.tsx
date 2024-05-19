import { MetricsAlert } from "../../../../components/MetricsAlert/MetricsAlert";
import { DASHBOARD_NAMES } from "../../../../constants/DASHBOARD_NAMES";
import { TerrariumInput } from "../TerrariumInput/TerrariumInput";
import styles from "./HeaderList.module.css";

interface Props {
  dashboardName: string;
  addFilterKey: (key: string) => void;
  metricsMessage: string;
}

export const HeaderList: React.FC<Props> = ({
  dashboardName,
  addFilterKey,
  metricsMessage,
}) => {
  return (
    <div className={styles.container}>
      {dashboardName === DASHBOARD_NAMES.DASHBOARD && (
        <TerrariumInput addFilterKey={addFilterKey} />
      )}
      <MetricsAlert metricsMessage={metricsMessage} />
    </div>
  );
};
