import { BASE_URL_TERRAIUM } from "../../../constants";
import { TerrariumForList } from "../../../entities/entity";
import { deleteWithAuth } from "../../api";

export const deleteTerrariumByIdService = async (
  id: number,
  token: string
): Promise<TerrariumForList[]> => {
  try {
    const response = await deleteWithAuth(`${BASE_URL_TERRAIUM}/${id}`, token);
    return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw new Error(err);
  }
};
