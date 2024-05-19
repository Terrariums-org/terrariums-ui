import { BASE_URL_API_EMAIL } from "../../../constants";
import { SendEmailDto } from "../../../entities/dtos";
import { postWithoutAuth } from "../../api/postWithoutAuth";

export const sendEmailService = async (
  data: SendEmailDto
): Promise<unknown> => {
  try {
    const response = await postWithoutAuth(`${BASE_URL_API_EMAIL}`, data);
    return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw new Error(err);
  }
};
