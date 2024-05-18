import { ITokenResponse } from "../entity";

export class CreateTokenResponse {
  id: number;
  token: string;
  email: string;
  constructor(tokenRes: ITokenResponse) {
    const { token, id, email } = tokenRes;
    this.id = id;
    this.token = token;
    this.email = email;
  }
}
