import { Dispatch, SetStateAction, createContext } from "react";
import { statusType } from "../../entities/entity/statusTypeContext.entity";
import { INITIAL_STATE_FOR_STATUS_TYPE } from "../../constants";

interface AlertStatusType {
  alertStatus: statusType;
  changeStatus: Dispatch<SetStateAction<statusType>>;
}

export const AlertStatusContext = createContext<AlertStatusType>({
  alertStatus: INITIAL_STATE_FOR_STATUS_TYPE,
  changeStatus: () => {},
});
