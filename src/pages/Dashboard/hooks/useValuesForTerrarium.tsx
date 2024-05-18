import { UseFormSetValue } from "react-hook-form";
import { AddTerrariumBase } from "../../../entities/entity";
import { useContext, useEffect } from "react";
import { EditTerrariumContext } from "../context/EditTerrariumContext";
import { getTerrariumByIdService } from "../../../services/services/terrariums";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/entities";
import { AlertStatusContext } from "../../../context/AlertStatus/AlertStatusContext";
import { INITIAL_STATE_FOR_STATUS_TYPE } from "../../../constants";
import { EditTerrariumDto } from "../../../entities/dtos";

export const useValueForTerrarium = (
  setValue: UseFormSetValue<AddTerrariumBase>
) => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { editTerrariumState } = useContext(EditTerrariumContext);
  const { changeStatus } = useContext(AlertStatusContext);
  const { idTerrarium } = editTerrariumState;
  useEffect(() => {
    if (idTerrarium === 0) return;
    const fetchTerrarium = async () => {
      try {
        const res: EditTerrariumDto = await getTerrariumByIdService(
          idTerrarium,
          token
        );
        const { name, codeEsp, terrariumProfile } = res;
        const {
          max_humidity,
          min_humidity,
          max_temp,
          min_temp,
          max_uv,
          min_uv,
        } = terrariumProfile;
        setValue("codeEsp", codeEsp);
        setValue("name", name);
        setValue("max_humidity", max_humidity);
        setValue("min_humidity", min_humidity);
        setValue("max_temp", max_temp);
        setValue("min_temp", min_temp);
        setValue("max_uv", max_uv);
        setValue("min_uv", min_uv);
      } catch (error) {
        changeStatus({
          message: "Algo fallo al conseguir los datos del terrario!",
          isValid: false,
          canShowAlert: true,
        });
      } finally {
        setTimeout(() => {
          changeStatus(INITIAL_STATE_FOR_STATUS_TYPE);
        }, 3000);
      }
    };
    fetchTerrarium();
  }, [idTerrarium]);
};
