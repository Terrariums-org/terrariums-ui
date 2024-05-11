import { MetricsAlert } from "../../../../components/MetricsAlert/MetricsAlert";
import { DashboardNames } from "../../../../entities/entity";
import { TerrariumInput } from "../TerrariumInput/TerrariumInput";
import styles from "./HeaderList.module.css";

interface Props {
  dashboardName: string;
}

export const HeaderList: React.FC<Props> = ({ dashboardName }) => {
  return (
    <div className={styles.container}>
      {dashboardName === DashboardNames.DASHBOARD && <TerrariumInput />}
      <MetricsAlert />
    </div>
  );
};
