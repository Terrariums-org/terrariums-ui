import { BASE_URL_TERRAIUM } from "../../../constants";
import { EditTerrariumDto } from "../../../entities/dtos";
import { AddTerrariumDto } from "../../../entities/dtos/AddTerrarium.dto";
import { postWithAuth } from "../../api/postWithAuth";

export const postTerrariumService = async (
  data: AddTerrariumDto | EditTerrariumDto,
  token: string
): Promise<unknown> => {
  try {
    const response = await postWithAuth(BASE_URL_TERRAIUM, token, data);
    return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw new Error(err);
  }
};
