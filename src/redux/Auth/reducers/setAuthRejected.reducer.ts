import { PayloadAction } from "@reduxjs/toolkit";
import { CreateTokenResponse } from "../../../entities/dtos";
import { AUTHKEY_LOCALSTORAGE } from "../../../constants";

export const setAuthReducerRejected = (
  _state: CreateTokenResponse,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _action: PayloadAction<any>
) => {
  window.localStorage.removeItem(AUTHKEY_LOCALSTORAGE);
  return new CreateTokenResponse({ id: 0, token: "" });
};
