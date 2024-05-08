import { AddTerrariumBase } from "../entity";
import { TerrariumProfileDto } from "./TerrariumProfile.dto";

export class AddTerrariumDto {
  id ?: number;
  codeEsp: string;
  name: string;
  terrariumProfile: TerrariumProfileDto;
  user: { id: number };
  constructor(terrariumReq: AddTerrariumBase, id: number) {
    this.codeEsp = terrariumReq.codeEsp;
    this.name = terrariumReq.name;
    this.terrariumProfile = new TerrariumProfileDto(terrariumReq);
    this.user = { id };
  }
}
