import styles from "./AddTerrarium.module.css";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { AddTerrariumSchema } from "../../validator/AddTerrarium.validator";
import { AddTerrariumBase } from "../../../../entities/entity";
import { RootState } from "../../../../redux/entities";
import { DashboardContext } from "../../context/DashboardContext";
import {
  DASHBOARD_NAMES,
  INITIAL_STATE_FOR_STATUS_TYPE,
} from "../../../../constants";
import { postTerrariumService } from "../../../../services/services/terrariums";
import { AddTerrariumDto } from "../../../../entities/dtos/AddTerrarium.dto";
import { ButtonAction, Input } from "../../../../components";
import { AlertStatusContext } from "../../../../context/AlertStatus/AlertStatusContext";

const AddTerrarium = () => {
  const { register, handleSubmit } = useForm<AddTerrariumBase>({
    resolver: zodResolver(AddTerrariumSchema),
  });
  const { token, id } = useSelector((state: RootState) => state.auth);
  const { setDashboardName } = useContext(DashboardContext);
  const { changeStatus } = useContext(AlertStatusContext);

  const handleRegisterTerrarium = (data: AddTerrariumBase) => {
    const reqTerrarium = new AddTerrariumDto(data, id);
    postTerrariumService(reqTerrarium, token)
      .then(() => {
        changeStatus({
          message: "Terrario creado exitosamente!",
          isValid: true,
          canShowAlert: true,
        });
        return;
      })
      .catch((err) => {
        changeStatus({
          message: "Algo fallo al crear el terrario!",
          isValid: false,
          canShowAlert: true,
        });
        throw new Error(err);
      })
      .finally(() => {
        setTimeout(() => {
          changeStatus(INITIAL_STATE_FOR_STATUS_TYPE);
          setDashboardName(DASHBOARD_NAMES.DASHBOARD);
          window.location.reload();
        }, 3000);
      });
  };

  return (
    <form
      className={styles.containerForm}
      onSubmit={handleSubmit(handleRegisterTerrarium)}
    >
      <div className={styles.headerForm}>
        <span>Agregar Terrario</span>
      </div>
      <div className={styles.inputsContainer}>
        <Input
          titleInput="Identificador"
          text="Identificador"
          type="text"
          config={register("codeEsp")}
        />
        <Input
          titleInput="Nombre del terrario"
          text="Nombre del terrario"
          type="text"
          config={register("name")}
        />
        <div className={styles.twoInputsLayer}>
          <Input
            titleInput="Temperatura"
            text="Temperatura Maxima"
            type="number"
            config={register("max_temp")}
          />
          <Input
            titleInput=""
            text="Temperatura Minima"
            type="number"
            config={register("min_temp")}
          />
          <Input
            titleInput="Humedad"
            text="Humedad Maxima"
            type="number"
            config={register("max_humidity")}
          />
          <Input
            titleInput=""
            text="Humedad Minima"
            type="number"
            config={register("min_humidity")}
          />
          <Input
            titleInput="Rayos UV"
            text="Rayos UV Maximos"
            type="number"
            config={register("max_uv")}
          />
          <Input
            titleInput=""
            text="Rayos UV Minimos"
            type="number"
            config={register("min_uv")}
          />
        </div>
      </div>
      <ButtonAction buttonName="Agregar" />
    </form>
  );
};

export default AddTerrarium;
