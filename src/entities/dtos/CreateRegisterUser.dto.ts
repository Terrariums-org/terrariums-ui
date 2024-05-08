import { RegisterUserBase } from "../entity";

export class CreateRegisterUserDTO {
  username: string;
  email: string;
  passwordUser: string;
  userProfile: { name: string; last_name: string };
  constructor(userRegisterReq: RegisterUserBase) {
    const { username, email, password, name, last_name } = userRegisterReq;
    this.username = username;
    this.email = email;
    this.passwordUser = password;
    this.userProfile = { name: name, last_name: last_name };
  }
}
