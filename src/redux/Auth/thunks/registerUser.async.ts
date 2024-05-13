import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthActions } from "../actions/auth.actions";
import {
  CreateRegisterUserDTO,
  CreateTokenResponse,
} from "../../../entities/dtos";
import { registerUserService } from "../../../services/services/users/registerUser.service";
import { RegisterUserBase } from "../../../entities/entity";

export const registerUserAsync = createAsyncThunk(
  AuthActions.registerAuth,
  async (payload: RegisterUserBase) => {
    try {
      const registerUserDTO = new CreateRegisterUserDTO(payload);
      const response = await registerUserService(registerUserDTO);
      const token = new CreateTokenResponse(response);
      return token;
    } catch (error : any) {
      console.error("Error registering user")
      throw new Error(error)
    }
  }
);
