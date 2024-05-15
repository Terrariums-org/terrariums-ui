import { useContext, useEffect, useState } from "react";
import { AlertStatusContext } from "../context/AlertStatus/AlertStatusContext";
import { getErrorName } from "../utils/getErrorName";
import { INITIAL_STATE_FOR_STATUS_TYPE } from "../constants";
import { useLocation } from "wouter";

export const useErrorName = (
  successfulMessage: string = "",
  locationPath: string = ""
) => {
  const { changeStatus } = useContext(AlertStatusContext);
  const [statusActionRedux, setStatusActionRedux] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [resErr, setError] = useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_location, setLocation] = useLocation();

  useEffect(() => {
    if (statusActionRedux === "") return;
    if (statusActionRedux === "rejected") {
      if (resErr === null || resErr === undefined) return;
      const errorName = getErrorName(resErr?.error?.message);
      changeStatus({
        message: errorName,
        isValid: false,
        canShowAlert: true,
      });
    }

    if (statusActionRedux === "fulfilled") {
      if (successfulMessage === "" && locationPath !== "") {
        setLocation(locationPath);
      } else {
        changeStatus({
          message: successfulMessage,
          isValid: true,
          canShowAlert: true,
        });
      }
    }

    setTimeout(() => {
      changeStatus(INITIAL_STATE_FOR_STATUS_TYPE);
    }, 3000);
  }, [statusActionRedux, resErr]);

  return { setError, setStatusActionRedux };
};
