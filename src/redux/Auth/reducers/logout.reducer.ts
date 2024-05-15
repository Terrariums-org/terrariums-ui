import { CreateTokenResponse } from "../../../entities/dtos";
import { AUTHKEY_LOCALSTORAGE } from "../../../constants";

export const logoutReducer = (_state: CreateTokenResponse) => {
  window.localStorage.removeItem(AUTHKEY_LOCALSTORAGE);
  return new CreateTokenResponse({ token: "", id: 0 });
};
