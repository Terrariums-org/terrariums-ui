import { useEffect, useState } from "react";
import { LineChartExample } from "../../components/Charts/LineChart";
import { BarChartHero } from "../../components/Charts/Barchart";
import { getTerrariumStatisticsService } from "../../../../services/services/terrariums/getTerrariumStatistics.service";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/entities";
import { GraphicI } from "../../../../entities/entity";
import styles from "./TerrariumsStadistics.module.css";

export const TerrariumStadistics = () => {
  const { token } = useSelector((root: RootState) => root.auth);
  const [data, setData] = useState<GraphicI>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getTerrariumStatisticsService(1, token)
      .then((res) => setData(res))
      .then(() => setIsLoading(false));
  }, []);
  return (
    <>
      {!isLoading && data ? (
        <div className={styles.container}>
          <LineChartExample data={data.lineal} />
          <BarChartHero bars={data.bars} />
        </div>
      ) : (
        <h1>Cargando...</h1>
      )}
    </>
  );
};
