import { ReactNode, useState } from "react";
import { INITIAL_STATE_FOR_STATUS_TYPE } from "../../constants";
import { statusType } from "./statusTypeContext.entity";
import { AlertStatusContext } from "./AlertStatusContext";

interface Props {
  children: ReactNode;
}

export const AlertStatusProvider: React.FC<Props> = ({ children }) => {
  const [alertStatus, changeStatus] = useState<statusType>(
    INITIAL_STATE_FOR_STATUS_TYPE
  );
  return (
    <AlertStatusContext.Provider value={{ alertStatus, changeStatus }}>
      {children}
    </AlertStatusContext.Provider>
  );
};
