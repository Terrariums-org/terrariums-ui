import { useContext, useEffect, useRef, useState } from "react";
import { MetricsEntity } from "../entities/entity";
import { io } from "socket.io-client";
import { BASE_URL_SOCKET } from "../constants";
import { TerrariumMetricsContext } from "../context/TerrariumMetrics";
import { useSelector } from "react-redux";
import { RootState } from "../redux/entities";
import { SendEmailDto } from "../entities/dtos";
import { sendEmailService } from "../services/services/emails/sendEmail.service";

const THIRTY_MINUTES = 30 * 60 * 1000; // 30 minutes in milliseconds

export const useTerrariumMetrics = () => {
  const [metrics, setMetrics] = useState<MetricsEntity>({
    temperatura: 0,
    humedad: 0,
    uv: 0,
    agua: 0,
    codeEsp: "",
    isMinHumidity: 0,
    isMaxHumidity: 0,
    isMaxTemperature: 0,
    isMinTemperature: 0,
    isMaxUv: 0,
    isMinUv: 0,
  });

  const { email, token } = useSelector((state: RootState) => state.auth);
  const { terrarium } = useContext(TerrariumMetricsContext);
  const { esp32Code, id } = terrarium;
  const [metricsMessage, setMetricsMessage] = useState<string>("");
  const lastEmailTimesRef = useRef({
    agua: 0,
    temperaturaMax: 0,
    temperaturaMin: 0,
    humedadMax: 0,
    humedadMin: 0,
    uvMax: 0,
    uvMin: 0,
  });

  const shouldSendEmail = (type: keyof typeof lastEmailTimesRef.current) => {
    const now = Date.now();
    console.log(now - lastEmailTimesRef.current[type]);
    console.log(THIRTY_MINUTES);
    if (now - lastEmailTimesRef.current[type] >= THIRTY_MINUTES) {
      lastEmailTimesRef.current[type] = now;
      return true;
    }
    return false;
  };

  useEffect(() => {
    const getSocketData = async () => {
      const socket = await io(BASE_URL_SOCKET, {
        auth: {
          token,
        },
      });
      socket.on("showClient", (data: MetricsEntity) => {
        // Agua
        if (data.agua <= 800 && shouldSendEmail("agua")) {
          const reqEmail = new SendEmailDto(
            email,
            "Tu recipiente se esta quedando sin agua!",
            "Asegurate de que tu recipiente aun tenga suficiente agua para que en casos de menor humedad, se pueda utilizar!"
          );

          sendEmailService(reqEmail)
            .catch((err) => {
              throw new Error(err);
            })
            .finally(() => {
              setMetricsMessage(reqEmail.subject);
              setTimeout(() => setMetricsMessage(""), 2000);
            });
        }

        // Temperatura máxima
        if (
          data.temperatura > data.isMaxTemperature &&
          shouldSendEmail("temperaturaMax")
        ) {
          const reqEmail = new SendEmailDto(
            email,
            `La temperatura del terrario se ha excedido de ${data.isMaxTemperature}`,
            `La temperatura del terrario ha alcanzado la temperatura de ${data.temperatura} de un maximo de temperatura de ${data.isMaxTemperature}!`
          );
          sendEmailService(reqEmail)
            .catch((err) => {
              throw new Error(err);
            })
            .finally(() => {
              setMetricsMessage(reqEmail.subject);
              setTimeout(() => setMetricsMessage(""), 2000);
            });
        }

        // Temperatura mínima
        if (
          data.temperatura < data.isMinTemperature &&
          shouldSendEmail("temperaturaMin")
        ) {
          const reqEmail = new SendEmailDto(
            email,
            `La temperatura del terrario se ha bajado de ${data.isMinTemperature}`,
            `La temperatura del terrario ha alcanzado la temperatura de ${data.temperatura} de un minimo de temperatura de ${data.isMinTemperature}!`
          );
          sendEmailService(reqEmail)
            .catch((err) => {
              throw new Error(err);
            })
            .finally(() => {
              setMetricsMessage(reqEmail.subject);
              setTimeout(() => setMetricsMessage(""), 2000);
            });
        }

        // Humedad máxima
        if (
          data.humedad > data.isMaxHumidity &&
          shouldSendEmail("humedadMax")
        ) {
          const reqEmail = new SendEmailDto(
            email,
            `La humedad del terrario se ha excedido de ${data.isMaxHumidity}`,
            `La humedad del terrario ha alcanzado la humedad de ${data.humedad} de un maximo de humedad de ${data.isMaxHumidity}!`
          );
          sendEmailService(reqEmail)
            .catch((err) => {
              throw new Error(err);
            })
            .finally(() => {
              setMetricsMessage(reqEmail.subject);
              setTimeout(() => setMetricsMessage(""), 2000);
            });
        }

        // Humedad mínima
        if (
          data.humedad < data.isMinHumidity &&
          shouldSendEmail("humedadMin")
        ) {
          const reqEmail = new SendEmailDto(
            email,
            `La humedad del terrario se ha bajado de ${data.isMinHumidity}`,
            `La humedad del terrario ha alcanzado la humedad de ${data.humedad} de un minimo de humedad de ${data.isMinHumidity}!`
          );
          sendEmailService(reqEmail)
            .catch((err) => {
              throw new Error(err);
            })
            .finally(() => {
              setMetricsMessage(reqEmail.subject);
              setTimeout(() => setMetricsMessage(""), 2000);
            });
        }

        // UV máximo
        if (data.uv > data.isMaxUv && shouldSendEmail("uvMax")) {
          const reqEmail = new SendEmailDto(
            email,
            `Verifique los rayos uv del terrario se ha excedido de ${data.isMaxUv}`,
            `Los rayos uv del terrario ha alcanzado ${data.uv} de un maximo de ${data.isMaxUv}!`
          );
          sendEmailService(reqEmail)
            .catch((err) => {
              throw new Error(err);
            })
            .finally(() => {
              setMetricsMessage(reqEmail.subject);
              setTimeout(() => setMetricsMessage(""), 2000);
            });
        }

        // UV mínimo
        if (data.uv < data.isMinUv && shouldSendEmail("uvMin")) {
          const reqEmail = new SendEmailDto(
            email,
            `Verifique los rayos uv del terrario se ha reducido de ${data.isMinUv}`,
            `Los rayos uv del terrario ha alcanzado ${data.uv} de un minimo de ${data.isMinUv}!`
          );
          sendEmailService(reqEmail)
            .catch((err) => {
              throw new Error(err);
            })
            .finally(() => {
              setMetricsMessage(reqEmail.subject);
              setTimeout(() => setMetricsMessage(""), 2000);
            });
        }

        if (esp32Code === "" || id === 0) return;

        if (id === data?.id) {
          setMetrics(data);
        }
      });
    };
    getSocketData();
  }, []);

  return {
    humidity: metrics.humedad,
    temperature: metrics.temperatura,
    uv: metrics.uv,
    metricsMessage,
  };
};
