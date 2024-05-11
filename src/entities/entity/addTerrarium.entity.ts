import { z } from "zod";
import { AddTerrariumSchema } from "../../pages/Dashboard/validator/AddTerrarium.validator";

export type AddTerrariumBase = z.infer<typeof AddTerrariumSchema>;
