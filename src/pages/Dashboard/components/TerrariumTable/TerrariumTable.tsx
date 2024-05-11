import { TerrariumItem } from "../TerrariumItem/TerrariumItem";
import styles from "./TerrariumTable.module.css";

export const TerrariumTable = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.theadName}>Nombre</th>
          <th>Editar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody className={styles.allTerrariums}>
        <TerrariumItem terrariumId={1} terrariumName="Terrario Fer"/>
        <TerrariumItem terrariumId={2} terrariumName="Terrario Rox"/>
        <TerrariumItem terrariumId={3} terrariumName="Terrario"/>
      </tbody>
    </table>
  );
};
