import { ButtonAction } from "../../../../components/ButtonAction/ButtonAction";
import styles from "./TableHeader.module.css";

export const TableHeader = () => {
  return (
    <div className={styles.container}>
      <h3>Lista de Registros</h3>
      <div className={styles.containerButton}>
        <ButtonAction buttonName="+" />
      </div>
    </div>
  );
};
