import styles from "./HomeLayer.module.css";
import { ReactNode, useContext } from "react";
import { TerrariumHeader } from "../TerrariumHeader/TerrariumHeader";
import Dashboard from "../../assets/svg/dashboard.svg";
import AddIcon from "../../assets/svg/add.svg";
import LogoutIcon from "../../assets/svg/logout.svg";
import { ItemNav } from "../ItemNav/ItemNav";
import { useLocation } from "wouter";
import { DashboardContext } from "../../pages/Dashboard/context/DashboardContext";
import { DashboardNames } from "../../entities/entity";

interface Props {
  children: ReactNode;
}

export const HomeLayer: React.FC<Props> = ({ children }) => {
  const { dashboardName, setDashboardName } = useContext(DashboardContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_location, setLocation] = useLocation();
  return (
    <main className={styles.main}>
      <nav>
        <TerrariumHeader />
        <ol>
          <ItemNav
            nameSelected={DashboardNames.DASHBOARD}
            handleClick={() => setDashboardName(DashboardNames.DASHBOARD)}
            selectedItem={dashboardName}
            title="Dashboard"
            imgUrl={Dashboard}
            altImg="Dashboard img"
          />
          <ItemNav
            nameSelected={DashboardNames.ADDREGISTER}
            handleClick={() => setDashboardName(DashboardNames.ADDREGISTER)}
            selectedItem={dashboardName}
            title="Agregar registro"
            imgUrl={AddIcon}
            altImg="Add icon"
          />
          <div className={styles.logoutContainer}>
            <ItemNav
              handleClick={() => setLocation("/")}
              title="Cerrar sesión"
              imgUrl={LogoutIcon}
              altImg="Logout icon"
            />
          </div>
        </ol>
      </nav>
      <div className={styles.secondBody}>{children}</div>
    </main>
  );
};
