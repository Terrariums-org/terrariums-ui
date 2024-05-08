import { useLocation } from "wouter";
import { ButtonAction } from "../../../../components/ButtonAction/ButtonAction";
import { HorizontalLine } from "../../../../components/HorizontalLine/HorizontalLine";
import { Input } from "../../../../components/Input/Input";
import { Message } from "../../../../components/MessageNewUsers/Message";
import styles from "./Form.module.css";

export const Form = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_location, setLocation] = useLocation();
  const handleRegister = (e: React.MouseEvent) => {
    e.preventDefault();
    setLocation("/register");
  };

  return (
    <div className={styles.mainContainer}>
      <form action="" className={styles.containerForm}>
        <Message
          titleContent="Iniciar Sesión"
          descriptionContent={"Bajo el sol del nuevo día, reptiles acechan."}
          actionTitle="Inicia sesión para comenzar."
        />
        <Input titleInput="Correo electronico" text="ejemplo@gmail.com" />
        <Input titleInput="Contraseña" text="Al menos 8 caracteres" />
        <button className={styles.buttonPassword}>
          ¿Olvidate tu contraseña?
        </button>
        <ButtonAction buttonName="Iniciar Sesión" />
      </form>
      <HorizontalLine />
      <span>
        ¿No tienes una cuenta?{" "}
        <button className={styles.register} onClick={handleRegister}>
          Registrarme
        </button>
      </span>
    </div>
  );
};
