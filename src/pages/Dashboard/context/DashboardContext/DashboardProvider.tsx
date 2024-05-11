import { ReactNode, useState } from "react";
import { DashboardContext } from "./DashboardContext";
import { DashboardNames } from "../../../../entities/entity";

interface Props {
  children: ReactNode;
}

export const DashboardProvider: React.FC<Props> = ({ children }) => {
  const [dashboardName, setDashboardName] = useState<string>(
    DashboardNames.DASHBOARD
  );
  return (
    <DashboardContext.Provider value={{ dashboardName, setDashboardName }}>
      {children}
    </DashboardContext.Provider>
  );
};
