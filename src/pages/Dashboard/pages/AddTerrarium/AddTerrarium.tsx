import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonAction } from "../../../../components/ButtonAction/ButtonAction";
import { Input } from "../../../../components/Input/Input";
import styles from "./AddTerrarium.module.css";
import { AddTerrariumSchema } from "../../validator/AddTerrarium.validator";
import { AddTerrariumBase } from "../../../../entities/entity";
import { useForm } from "react-hook-form";

const AddTerrarium = () => {
  const { register, handleSubmit } = useForm<AddTerrariumBase>({
    resolver: zodResolver(AddTerrariumSchema),
  });

  const handleRegisterTerrarium = (data: AddTerrariumBase) => {
    alert(JSON.stringify(data));
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
