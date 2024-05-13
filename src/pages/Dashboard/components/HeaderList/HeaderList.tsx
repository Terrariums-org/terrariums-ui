import { MetricsAlert } from "../../../../components/MetricsAlert/MetricsAlert";
import { DASHBOARD_NAMES } from "../../../../constants/DASHBOARD_NAMES";
import { TerrariumInput } from "../TerrariumInput/TerrariumInput";
import styles from "./HeaderList.module.css";

interface Props {
  dashboardName: string;
}

export const HeaderList: React.FC<Props> = ({ dashboardName }) => {
  return (
    <div className={styles.container}>
      {dashboardName === DASHBOARD_NAMES.DASHBOARD && <TerrariumInput />}
      <MetricsAlert />
    </div>
  );
};
