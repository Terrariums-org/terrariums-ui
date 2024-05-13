import { PayloadAction } from "@reduxjs/toolkit";
import { CreateTokenResponse } from "../../../entities/dtos";

export const setAuthReducerRejected = (
  _state: CreateTokenResponse,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _action: PayloadAction<any>
) => {
  window.alert("Problema del servidor");
  return new CreateTokenResponse({ id: 0, token: "" });
};
