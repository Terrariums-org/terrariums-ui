import { TerrariumForList } from "../../../../entities/entity";
import { TerrariumItem } from "../TerrariumItem/TerrariumItem";
import styles from "./TerrariumTable.module.css";

interface Props {
  terrariums: TerrariumForList[];
  isLoading: boolean;
}

export const TerrariumTable: React.FC<Props> = ({ terrariums, isLoading }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.theadName}>Nombre</th>
          <th>Editar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <tr className={styles.noContent}>Consiguiendo terrarios...</tr>
        ) : terrariums.length > 0 ? (
          terrariums.map((terrarium, index) => {
            return (
              <TerrariumItem
                idToShow={index + 1}
                key={index}
                terrariumName={terrarium.name}
                terrariumId={terrarium.id}
              />
            );
          })
        ) : (
          <tr className={styles.noContent}>No tienes terrarios registrados!</tr>
        )}
      </tbody>
    </table>
  );
};
