import { AddTerrariumBase } from "../entity";
import { EditTerrariumProfileDto } from "./EditTerrariumProfile.dto";

export class EditTerrariumDto {
  id: number;
  codeEsp: string;
  name: string;
  terrariumProfile: EditTerrariumProfileDto;
  user: { id: number };
  constructor(terrariumReq: AddTerrariumBase, id: number, idUser: number) {
    this.id = id;
    this.codeEsp = terrariumReq.codeEsp;
    this.name = terrariumReq.name;
    this.terrariumProfile = new EditTerrariumProfileDto(terrariumReq, id);
    this.user = { id: idUser };
  }
}
