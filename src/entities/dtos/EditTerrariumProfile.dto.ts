import { AddTerrariumBase } from "../entity";

export class EditTerrariumProfileDto {
  id: number;
  max_temp: number;
  min_temp: number;
  max_humidity: number;
  min_humidity: number;
  max_uv: number;
  min_uv: number;
  constructor(terrariumReq: AddTerrariumBase, id: number) {
    const { max_temp, min_temp, max_humidity, min_humidity, max_uv, min_uv } =
      terrariumReq;
    this.id = id;
    this.max_temp = max_temp;
    this.min_temp = min_temp;
    this.max_humidity = max_humidity;
    this.min_humidity = min_humidity;
    this.max_uv = max_uv;
    this.min_uv = min_uv;
  }
}
