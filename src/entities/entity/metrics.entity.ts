export interface MetricsEntity {
  id?: number;
  humedad: number;
  temperatura: number;
  uv: number;
  agua: number;
  codeEsp: string;
  isMaxHumidity: number;
  isMaxTemperature: number;
  isMaxUv: number;
  isMinHumidity: number;
  isMinTemperature: number;
  isMinUv: number;
}
