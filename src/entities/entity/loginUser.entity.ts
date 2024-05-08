import { z } from "zod";
import { LoginUserSchema } from "../../pages/Login/validator/LoginUser.validator";

export type LoginUserBase = z.infer<typeof LoginUserSchema>;
