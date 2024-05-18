import { BASE_URL_TERRAIUM } from "../../../constants";
import { EditTerrariumDto } from "../../../entities/dtos";
import { getWithAuth } from "../../api";

export const getTerrariumByIdService = async (
  id: number,
  token: string
): Promise<EditTerrariumDto> => {
  try {
    const response = await getWithAuth(`${BASE_URL_TERRAIUM}/${id}`, token);
    return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw new Error(err);
  }
};
