import { z } from "zod";

export const CreateUserSchema = z.object({
  username: z
    .string()
    .min(5, {
      message: "La longitud minima es de 5 caracteres",
    })
    .max(45, {
      message: "La longitud maxima es de 45 caracteres",
    }),
  email: z
    .string()
    .email({
      message: "Email invalido",
    })
    .max(60, {
      message: "La longitud maxima es de 60 caracteres",
    }),
  password: z
    .string()
    .min(8, {
      message: "La contraseña debe tener al menos 8 caracteres",
    })
    .max(60, {
      message: "La longitud maxima es de 60 caracteres",
    }),
  name: z
    .string()
    .min(1, {
      message: "El nombre es un campo requerido",
    })
    .max(60, {
      message: "La longitud maxima es de 60 caracteres",
    }),
  last_name: z
    .string()
    .min(1, {
      message: "El apellido es un campo requerido",
    })
    .max(60, {
      message: "La longitud maxima es de 60 caracteres",
    }),
});
