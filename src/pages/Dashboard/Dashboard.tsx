import styles from "./Dashboard.module.css";
import { HomeLayer } from "../../components/HomeLayer/HomeLayer";
import { HeaderList } from "./components/HeaderList/HeaderList";
import GeckoImg from "../../assets/imgs/gecko.png";
import { ArtImg } from "../../components/ArtImg/ArtImg";
import { Suspense, lazy, useContext } from "react";
import { DashboardContext } from "./context/DashboardContext";
import { DashboardNames } from "../../entities/entity";

const LazyTableTerrariums = lazy(
  () => import("./pages/TableTerrariums/TableTerrariums")
);

export const Dashboard = () => {
  const { dashboardName } = useContext(DashboardContext);
  return (
    <HomeLayer>
      <HeaderList />
      <div className={styles.containerContent}>
        <div className={styles.containerMainContent}>
          <Suspense fallback={"Loading..."}>
            {dashboardName === DashboardNames.DASHBOARD ? (
              <LazyTableTerrariums />
            ) : null}
          </Suspense>
        </div>
        <ArtImg urlImg={GeckoImg} altImg="Gecko Img" />
      </div>
    </HomeLayer>
  );
};
