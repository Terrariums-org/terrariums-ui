import { useContext } from "react";
import { AddTerrariumDto, EditTerrariumDto } from "../entities/dtos";
import { AlertStatusContext } from "../context/AlertStatus/AlertStatusContext";
import { postTerrariumService } from "../services/services/terrariums";
import { DASHBOARD_NAMES, INITIAL_STATE_FOR_STATUS_TYPE } from "../constants";
import { DashboardContext } from "../pages/Dashboard/context/DashboardContext";

export const usePostTerrarium = (
  errMessage: string,
  successfulMessage: string,
  token: string
) => {
  const { setDashboardName } = useContext(DashboardContext);
  const { changeStatus } = useContext(AlertStatusContext);

  const handlePost = async (
    reqTerrarium: EditTerrariumDto | AddTerrariumDto
  ) => {
    try {
      await postTerrariumService(reqTerrarium, token);
      changeStatus({
        message: successfulMessage,
        isValid: true,
        canShowAlert: true,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      changeStatus({
        message: errMessage,
        isValid: false,
        canShowAlert: true,
      });
      throw new Error(error);
    } finally {
      setTimeout(() => {
        changeStatus(INITIAL_STATE_FOR_STATUS_TYPE);
        setDashboardName(DASHBOARD_NAMES.DASHBOARD);
        window.location.reload();
      }, 3000);
    }
  };

  return {
    handlePost,
  };
};
