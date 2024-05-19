import { ReactNode, useState } from "react";
import { TerrariumMetrics } from "./TerrariumMetrics.entity";
import { TerrariumMetricsContext } from "./TerrariumMetricsContext";

interface Props {
  children: ReactNode;
}

export const TerrariumMetricsProvider: React.FC<Props> = ({ children }) => {
  const [terrarium, setTerrarium] = useState<TerrariumMetrics>({
    id: 0,
    name: "",
    esp32Code: "",
  });
  return (
    <TerrariumMetricsContext.Provider value={{ terrarium, setTerrarium }}>
      {children}
    </TerrariumMetricsContext.Provider>
  );
};
