import { BASE_URL_AUTH } from "../../../constants/BASE_URL_AUTH";
import { CreateLoginUserDto } from "../../../entities/dtos";
import { ITokenResponse } from "../../../entities/entity";
import { postWithoutAuth } from "../../api/postWithoutAuth";

export const loginUserService = async (
  data: CreateLoginUserDto
): Promise<ITokenResponse> => {
  try {
    const response = await postWithoutAuth(`${BASE_URL_AUTH}/login`, data);
    return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw new Error(err);
  }
};
