import styles from "./FormTerrarium.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddTerrariumSchema } from "../../validator/AddTerrarium.validator";
import { AddTerrariumBase } from "../../../../entities/entity";
import { ButtonAction, Input } from "../../../../components";
import { useValueForTerrarium } from "../../hooks/useValuesForTerrarium";

interface Props {
  titleForm: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleAction: (data: any) => void;

  titleButton: string;
}

const AddTerrarium: React.FC<Props> = ({ titleForm, handleAction, titleButton }) => {
  const { register, handleSubmit, setValue } = useForm<AddTerrariumBase>({
    resolver: zodResolver(AddTerrariumSchema),
  });

  useValueForTerrarium(setValue);

  const handleRegisterTerrarium = (data: AddTerrariumBase) => {
    handleAction(data);
  };

  return (
    <form
      className={styles.containerForm}
      onSubmit={handleSubmit(handleRegisterTerrarium)}
    >
      <div className={styles.headerForm}>
        <span>{titleForm}</span>
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
      <ButtonAction buttonName={titleButton} />
    </form>
  );
};

export default AddTerrarium;
