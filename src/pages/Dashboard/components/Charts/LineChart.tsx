import { LineChart } from "@mui/x-charts/LineChart";
import { LinealT } from "../../../../entities/entity";

interface SimpleLineChartProps {
  data: LinealT[];
}

export function LineChartExample({ data }: SimpleLineChartProps) {
  const xLabels = data.map((item) => new Date(item.date).toLocaleDateString());
  const temperatureData = data.map((item) => parseInt(item.temperature));
  const humidityData = data.map((item) => parseInt(item.humidity));
  const uvData = data.map((item) => parseInt(item.uv));

  return (
    <LineChart
      width={700}
      height={300}
      series={[
        {
          data: temperatureData,
          label: "Temperature",
          valueFormatter: (v) => `${v}%`,
        },
        {
          data: humidityData,
          label: "Humidity",
          valueFormatter: (v) => `${v}%`,
        },
        { data: uvData, label: "UV", valueFormatter: (v) => `${v}%` },
      ]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
      colors={["#a26328", "#FF5733", "#E08977"]}
    />
  );
}
