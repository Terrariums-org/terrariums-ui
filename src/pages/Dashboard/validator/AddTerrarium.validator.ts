import { z } from "zod";

export const AddTerrariumSchema = z.object({
  codeEsp : z.string().min(1, { message: "Agregue codigo de vinculación" }),
  name: z
    .string()
    .min(1, {
      message: "Nombre de terrario requerido",
    })
    .max(45, {
      message: "La longitud maxima es de 45 caracteres",
    }),
  max_temp: z.coerce.number().min(1, {
    message: "La maxima temperatura no puede ser menor a 1",
  }),
  min_temp: z.coerce.number().min(1, {
    message: "La minima temperatura no puede ser menor a 1",
  }),
  max_humidity: z.coerce.number().min(1, {
    message: "La maxima humedad no puede ser menor a 1",
  }),
  min_humidity: z.coerce.number().min(1, {
    message: "La minima humedad no puede ser menor a 1",
  }),
  max_uv: z.coerce.number().min(1, {
    message: "La maxima uv no puede ser menor a 1",
  }),
  min_uv: z.coerce.number().min(1, {
    message: "La minima uv no puede ser menor a 1",
  }),
});
