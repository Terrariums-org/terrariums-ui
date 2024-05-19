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
import { AddTerrariumDto } from "../../entities/dtos";
import { EditTerrariumProvider } from "./context/EditTerrariumContext";
import { usePostTerrarium, useTerrariumMetrics } from "../../hooks";
import { MetricsContainer } from "./components/MetricsContainer/MetricsContainer";

const LazyTableTerrariums = lazy(
  () => import("./pages/TableTerrariums/TableTerrariums")
);

const LazyFormTerrarium = lazy(
  () => import("./pages/FormTerrarium/FormTerrarium")
);

export const Dashboard = () => {
  const { token, id } = useSelector((state: RootState) => state.auth);
  const { terrariums, isloading, addFilterKey } = useTerrariums(id, token);
  const { dashboardName } = useContext(DashboardContext);
  const { handlePost } = usePostTerrarium(
    "Algo fallo al crear el terrario!",
    "Terrario creado exitosamente!",
    token
  );
  const { humidity, temperature, uv, metricsMessage } = useTerrariumMetrics();

  return (
    <EditTerrariumProvider>
      <HomeLayer>
        <HeaderList
          dashboardName={dashboardName}
          addFilterKey={addFilterKey}
          metricsMessage={metricsMessage}
        />
        <div className={styles.containerContent}>
          <div className={styles.containerMainContent}>
            <Suspense fallback={"Loading..."}>
              {dashboardName === DASHBOARD_NAMES.DASHBOARD ? (
                <LazyTableTerrariums
                  terrariums={terrariums}
                  isLoading={isloading}
                />
              ) : (
                <LazyFormTerrarium
                  titleForm="Agregar Terrario"
                  handleAction={async (data) => {
                    const reqTerrarium = new AddTerrariumDto(data, id);
                    await handlePost(reqTerrarium);
                  }}
                  titleButton="Agregar"
                />
              )}
            </Suspense>
          </div>
          <div className={styles.containerImg}>
            <ArtImg urlImg={GeckoImg} altImg="Gecko Img" />
            <MetricsContainer
              humidity={humidity}
              temperature={temperature}
              uv={uv}
            />
          </div>
        </div>
      </HomeLayer>
    </EditTerrariumProvider>
  );
};
