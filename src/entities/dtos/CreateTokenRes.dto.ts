import { ITokenResponse } from "../entity";

export class CreateTokenResponse {
  id : number;
  token: string;
  constructor(tokenRes: ITokenResponse) {
    const { token , id} = tokenRes;
    this.id = id;
    this.token = token;
  }
}
