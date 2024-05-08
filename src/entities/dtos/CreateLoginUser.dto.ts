import { LoginUserBase } from "../entity";

export class CreateLoginUserDto {
  email: string;
  passwordUser: string;
  constructor(userLoginReq: LoginUserBase) {
    const { email, password } = userLoginReq;
    this.email = email;
    this.passwordUser = password;
  }
}
