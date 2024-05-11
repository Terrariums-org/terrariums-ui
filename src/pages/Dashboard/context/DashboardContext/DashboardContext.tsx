import { Dispatch, SetStateAction, createContext } from "react";
import { DashboardNames } from "../../../../entities/entity";

interface DashboardContextType {
  dashboardName: string;
  setDashboardName: Dispatch<SetStateAction<string>>;
}

export const DashboardContext = createContext<DashboardContextType>({
  dashboardName: DashboardNames.DASHBOARD,
  setDashboardName: () => {},
});
