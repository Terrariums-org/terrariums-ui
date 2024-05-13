import { AUTHKEY_LOCALSTORAGE } from "../../../constants/authKey.localstorage";
import { CreateTokenResponse } from "../../../entities/dtos";

const savedData = window.localStorage.getItem(AUTHKEY_LOCALSTORAGE);

const initialToken = savedData ? JSON.parse(savedData) : { token: "" };

export const initialStateAuth: CreateTokenResponse = new CreateTokenResponse(
  initialToken
);
