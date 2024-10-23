import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { BarsT } from "../../../../entities/entity";

interface BarChartHeroProps {
  bars: BarsT[];
}

export const BarChartHero: React.FC<BarChartHeroProps> = ({ bars = [] }) => {
  const xAxisData = bars.map((bar) => bar.name);
  const seriesData = bars.map((bar) => bar.level);

  return (
    <BarChart
      xAxis={[
        {
          id: "barCategories",
          data: xAxisData,
          scaleType: "band",
        },
      ]}
      series={[
        {
          data: seriesData,
          valueFormatter : (v) => `${v} mg/l`
        },
      ]}
      colors={["#a26328"]}
      width={700}
      height={300}
    />
  );
};
