import { Dispatch, SetStateAction, createContext } from "react";
import { TerrariumMetrics } from "./TerrariumMetrics.entity";

interface TerrariumContextType {
  terrarium: TerrariumMetrics;
  setTerrarium: Dispatch<SetStateAction<TerrariumMetrics>>;
}

export const TerrariumMetricsContext = createContext<TerrariumContextType>({
  terrarium: {
    id: 0,
    name: "",
    esp32Code: "",
  },
  setTerrarium: () => {},
});
