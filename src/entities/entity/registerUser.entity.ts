import { z } from "zod";
import { CreateUserSchema } from "../../pages/Register/validator/CreateUser.validator";

export type RegisterUserBase = z.infer<typeof CreateUserSchema>;
