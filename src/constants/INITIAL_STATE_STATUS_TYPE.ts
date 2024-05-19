import { statusType } from "../context/AlertStatus";

export const INITIAL_STATE_FOR_STATUS_TYPE: statusType = {
  message: "",
  isValid: false,
  canShowAlert: false,
};
