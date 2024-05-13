import { useContext } from "react";
import { ButtonAction } from "../../../../components/ButtonAction/ButtonAction";
import styles from "./TableHeader.module.css";
import { DashboardContext } from "../../context/DashboardContext";
import { DASHBOARD_NAMES } from "../../../../constants";

export const TableHeader = () => {
  const { setDashboardName } = useContext(DashboardContext);
  return (
    <div className={styles.container}>
      <h3>Lista de Registros</h3>
      <div className={styles.containerButton}>
        <ButtonAction
          buttonName="+"
          handleClick={() => setDashboardName(DASHBOARD_NAMES.ADDREGISTER)}
        />
      </div>
    </div>
  );
};
