import styles from "./HomeLayer.module.css";
import { ReactNode, useContext } from "react";
import { TerrariumHeader } from "../../components/TerrariumHeader/TerrariumHeader";
import Dashboard from "../../assets/svg/dashboard.svg";
import AddIcon from "../../assets/svg/add.svg";
import GraphicIcon from "../../assets/svg/graphic.svg";
import LogoutIcon from "../../assets/svg/logout.svg";
import { ItemNav } from "../../components/ItemNav/ItemNav";
import { useLocation } from "wouter";
import { DashboardContext } from "../../pages/Dashboard/context/DashboardContext";
import { DASHBOARD_NAMES } from "../../constants/DASHBOARD_NAMES";
import { useAppDispatch } from "../../redux/entities/reduxDispatch.entity";
import { logout } from "../../redux/Auth/auth.slice";
import { AlertAction } from "../../components";
import { AlertStatusContext } from "../../context/AlertStatus/AlertStatusContext";

interface Props {
  children: ReactNode;
}

export const HomeLayer: React.FC<Props> = ({ children }) => {
  const { dashboardName, setDashboardName } = useContext(DashboardContext);
  const { alertStatus } = useContext(AlertStatusContext);
  const { message, isValid, canShowAlert } = alertStatus;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_location, setLocation] = useLocation();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    setLocation("/");
  };
  return (
    <main className={styles.main}>
      <nav>
        <TerrariumHeader />
        <ol>
          <ItemNav
            nameSelected={DASHBOARD_NAMES.DASHBOARD}
            handleClick={() => setDashboardName(DASHBOARD_NAMES.DASHBOARD)}
            selectedItem={dashboardName}
            title="Dashboard"
            imgUrl={Dashboard}
            altImg="Dashboard img"
          />

          <ItemNav
            nameSelected={DASHBOARD_NAMES.ADDREGISTER}
            handleClick={() => setDashboardName(DASHBOARD_NAMES.ADDREGISTER)}
            selectedItem={dashboardName}
            title="Agregar registro"
            imgUrl={AddIcon}
            altImg="Add icon"
          />
          <ItemNav
            nameSelected={DASHBOARD_NAMES.SEE_STADISTICS}
            handleClick={() => setDashboardName(DASHBOARD_NAMES.SEE_STADISTICS)}
            selectedItem={dashboardName}
            title="Ver estadisticas"
            imgUrl={GraphicIcon}
            altImg="Estadistics"
          />
          <div className={styles.logoutContainer}>
            <ItemNav
              handleClick={handleLogout}
              title="Cerrar sesión"
              imgUrl={LogoutIcon}
              altImg="Logout icon"
            />
          </div>
        </ol>
      </nav>
      <div className={styles.secondBody}>
        {canShowAlert && <AlertAction message={message} isValid={isValid} />}
        {children}
      </div>
    </main>
  );
};
