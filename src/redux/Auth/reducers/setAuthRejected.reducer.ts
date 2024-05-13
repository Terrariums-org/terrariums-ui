import { PayloadAction } from "@reduxjs/toolkit";
import { CreateTokenResponse } from "../../../entities/dtos";

export const setAuthReducerRejected = (
  _state: CreateTokenResponse,
  _action: PayloadAction<any>
) => {
  window.alert("Problema del servidor");
  return new CreateTokenResponse({ token: "" });
};
