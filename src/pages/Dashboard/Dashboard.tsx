import styles from "./Dashboard.module.css";
import { HomeLayer } from "../../components/HomeLayer/HomeLayer";
import { HeaderList } from "./components/HeaderList/HeaderList";
import GeckoImg from "../../assets/imgs/gecko.png";
import { ArtImg } from "../../components/ArtImg/ArtImg";
import { Suspense, lazy } from "react";

const LazyTableTerrariums = lazy(
  () => import("./pages/TableTerrariums/TableTerrariums")
);

export const Dashboard = () => {
  // create 2 components for dashboard and add register
  // then a component will be rendered by a context state
  // remember this components will be appended to the suspense
  // the components will be lazily loaded
  return (
    <HomeLayer>
      <HeaderList />
      <div className={styles.containerContent}>
        <div className={styles.containerMainContent}>
          <Suspense fallback={"Loading..."}>
            <LazyTableTerrariums />
          </Suspense>
        </div>
        <ArtImg urlImg={GeckoImg} altImg="Gecko Img" />
      </div>
    </HomeLayer>
  );
};
