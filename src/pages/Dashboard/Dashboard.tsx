import styles from "./Dashboard.module.css";
import { useSelector } from "react-redux";
import { HomeLayer } from "../../layouts/HomeLayer/HomeLayer";
import GeckoImg from "../../assets/imgs/gecko.png";
import { Suspense, lazy, useContext } from "react";
import { DashboardContext } from "./context/DashboardContext";
import { DASHBOARD_NAMES } from "../../constants/DASHBOARD_NAMES";
import { useTerrariums } from "../../hooks/useTerrariums";
import { RootState } from "../../redux/entities";
import { HeaderList } from "./components";
import { ArtImg } from "../../components";

const LazyTableTerrariums = lazy(
  () => import("./pages/TableTerrariums/TableTerrariums")
);

const LazyAddTerrarium = lazy(
  () => import("./pages/AddTerrarium/AddTerrarium")
);

export const Dashboard = () => {
  const { token, id } = useSelector((state: RootState) => state.auth);
  const { terrariums, isloading, addFilterKey } = useTerrariums(id, token);
  const { dashboardName } = useContext(DashboardContext);
  return (
    <>
      <HomeLayer>
        <HeaderList dashboardName={dashboardName} addFilterKey={addFilterKey} />
        <div className={styles.containerContent}>
          <div className={styles.containerMainContent}>
            <Suspense fallback={"Loading..."}>
              {dashboardName === DASHBOARD_NAMES.DASHBOARD ? (
                <LazyTableTerrariums
                  terrariums={terrariums}
                  isLoading={isloading}
                />
              ) : (
                <LazyAddTerrarium />
              )}
            </Suspense>
          </div>
          <ArtImg urlImg={GeckoImg} altImg="Gecko Img" />
        </div>
      </HomeLayer>
    </>
  );
};
