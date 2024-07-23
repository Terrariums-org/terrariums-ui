import { BASE_URL_AUTH } from "../../../constants/BASE_URL_AUTH";
import { CreateRegisterUserDTO } from "../../../entities/dtos";
import { ITokenResponse } from "../../../entities/entity";
import { postWithoutAuth } from "../../api/postWithoutAuth";

export const registerUserService = async (
  data: CreateRegisterUserDTO
): Promise<ITokenResponse> => {
  try {
    const response = await postWithoutAuth(`${BASE_URL_AUTH}/register`, data);
    return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw new Error(err);
  }
};
