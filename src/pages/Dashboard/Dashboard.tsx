import styles from "./Dashboard.module.css";
import { HomeLayer } from "../../components/HomeLayer/HomeLayer";
import { HeaderList } from "./components/HeaderList/HeaderList";
import GeckoImg from "../../assets/imgs/gecko.png";
import { ArtImg } from "../../components/ArtImg/ArtImg";
import { Suspense, lazy, useContext } from "react";
import { DashboardContext } from "./context/DashboardContext";
import { DASHBOARD_NAMES } from "../../constants/DASHBOARD_NAMES";
import { useTerrariums } from "../../hooks/useTerrariums";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/entities";

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
  );
};
