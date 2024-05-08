import { z } from "zod";
import { AddTerrariumSchema } from "../../pages/AddTerrarium/validator/AddTerrarium.validator";

export type AddTerrariumBase = z.infer<typeof AddTerrariumSchema>;
