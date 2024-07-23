import { BASE_URL_API_STATISTICS } from "../../../constants";
import { GraphicI } from "../../../entities/entity";
import { getWithAuth } from "../../api";

export const getTerrariumStatisticsService = async (
  id: number,
  token: string
): Promise<GraphicI> => {
  try {
    const response = await getWithAuth(
      `${BASE_URL_API_STATISTICS}/${1}`,
      token
    );
    return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw new Error(err);
  }
};
