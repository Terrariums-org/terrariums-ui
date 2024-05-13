import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthActions } from "../actions/auth.actions";
import { LoginUserBase } from "../../../entities/entity";
import { loginUserService } from "../../../services/services/users/loginUser.service";
import {
  CreateLoginUserDto,
  CreateTokenResponse,
} from "../../../entities/dtos";

export const loginUserAsync = createAsyncThunk(
  AuthActions.loginAuth,
  async (payload: LoginUserBase) => {
    try {
      const loginUserDTO = new CreateLoginUserDto(payload);
      const response = await loginUserService(loginUserDTO);
      const token = new CreateTokenResponse(response);
      return token;
    } catch (error: any) {
      console.error("Error login user");
      throw new Error(error);
    }
  }
);
