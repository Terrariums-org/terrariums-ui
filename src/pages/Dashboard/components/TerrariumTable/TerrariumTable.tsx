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
          <p>"Consiguiendo terrarios..."</p>
        ) : (
          terrariums.length > 0 &&
          terrariums.map((terrarium, index) => {
            return (
              <TerrariumItem
                idToShoww={index + 1}
                key={index}
                terrariumName={terrarium.name}
                terrariumId={terrarium.id}
              />
            );
          })
        )}
      </tbody>
    </table>
  );
};
