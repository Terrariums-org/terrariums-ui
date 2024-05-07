import { TerrariumHeader } from "../TerrariumHeader/TerrariumHeader";
import styles from "./Message.module.css";

export const Message = () => {
  return (
    <div className={styles.container}>
      <TerrariumHeader />
      <span className={styles.title}>
        Iniciar Sesión
        <br />
      </span>
      <span>
        Bajo el sol del nuevo día, reptiles acechan. <br />
        Inicia sesión para comenzar.
      </span>
    </div>
  );
};
