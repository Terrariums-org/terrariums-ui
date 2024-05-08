import styles from "./RegisterForm.module.css";
import { ButtonAction } from "../../../../components/ButtonAction/ButtonAction";
import { HorizontalLine } from "../../../../components/HorizontalLine/HorizontalLine";
import { Input } from "../../../../components/Input/Input";
import { Message } from "../../../../components/MessageNewUsers/Message";
import { useLocation } from "wouter";

export const RegisterForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_location, setLocation] = useLocation();
  const handleLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    setLocation("/");
  };
  return (
    <div className={styles.mainContainer}>
      <form action="" className={styles.containerForm}>
        <Message
          titleContent="Crear una cuenta"
          descriptionContent={"Bajo la luz matutina, reptiles acechan."}
          actionTitle="Registrate para explorar."
        />
        <div className={styles.containerInputs}>
          <Input titleInput="Nombre" text="Ingresa tu nombre" />
          <Input titleInput="Apellidos" text="Ingresa tus apellidos" />
          <Input titleInput="Usuario" text="Ingresa tu nombre de usuario" />
          <Input titleInput="Correo electronico" text="ejemplo@gmail.com" />
          <Input titleInput="Contraseña" text="Al menos 8 caracteres" />
        </div>
        <ButtonAction buttonName="Registrarme" />
      </form>
      <HorizontalLine />
      <span>
        ¿Ya tienes una cuenta?{" "}
        <button className={styles.login} onClick={handleLogin}>
          Iniciar sesión
        </button>
      </span>
    </div>
  );
};
