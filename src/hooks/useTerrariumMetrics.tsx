import { useContext, useEffect, useState } from "react";
import { MetricsEntity } from "../entities/entity";
import { io } from "socket.io-client";
import { BASE_URL_SOCKET } from "../constants";
import { TerrariumMetricsContext } from "../context/TerrariumMetrics";
import { useSelector } from "react-redux";
import { RootState } from "../redux/entities";
import { SendEmailDto } from "../entities/dtos";
import { sendEmailService } from "../services/services/emails/sendEmail.service";

export const useTerrariumMetrics = () => {
  const [metrics, setMetrics] = useState<MetricsEntity>({
    temperatura: 0,
    humedad: 0,
    uv: 0,
    agua: 0,
  });
  const { email, token } = useSelector((state: RootState) => state.auth);
  const { terrarium } = useContext(TerrariumMetricsContext);
  const { esp32Code, id } = terrarium;

  useEffect(() => {
    const getSocketData = async () => {
      const socket = await io(BASE_URL_SOCKET, {
        auth: {
          token,
        },
      });
      socket.on("showClient", (data: MetricsEntity) => {
        if (esp32Code === "" || id === 0) return;
        //we need to compare the terraium id with the real id terrarium
        if (id === data?.id) {
          setMetrics(data);
        }
        // prevent water from level 800
        if (data.agua <= 800) {
          const reqEmail = new SendEmailDto(
            email,
            "Tu recipiente se esta quedando sin agua!",
            "Asegurate de que tu recipiente aun tenga suficiente agua para que en casos de menor humedad, se pueda utilizar!"
          );
          sendEmailService(reqEmail)
            .then(() => console.log("Email sent successfully"))
            .catch((err) => {
              throw new Error(err);
            });
        }
      });
    };
    getSocketData();
  }, [id, esp32Code]);
  return {
    humidity: metrics.agua,
    temperature: metrics.temperatura,
    uv: metrics.uv,
  };
};
