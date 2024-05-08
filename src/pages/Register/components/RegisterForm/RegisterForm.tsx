import styles from "./RegisterForm.module.css";
import { ButtonAction } from "../../../../components/ButtonAction/ButtonAction";
import { HorizontalLine } from "../../../../components/HorizontalLine/HorizontalLine";
import { Input } from "../../../../components/Input/Input";
import { Message } from "../../../../components/MessageNewUsers/Message";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { CreateUserSchema } from "../../validator/CreateUser.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterUserBase } from "../../../../entities/entity";

export const RegisterForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_location, setLocation] = useLocation();
  const {
    register,
    handleSubmit,
  } = useForm<RegisterUserBase>({
    resolver: zodResolver(CreateUserSchema),
  });
  const handleLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    setLocation("/");
  };
  const handleOnSubmit = (data: RegisterUserBase) => {
    console.log(data);
  };
  return (
    <div className={styles.mainContainer}>
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className={styles.containerForm}
      >
        <Message
          titleContent="Crear una cuenta"
          descriptionContent={"Bajo la luz matutina, reptiles acechan."}
          actionTitle="Registrate para explorar."
        />
        <div className={styles.containerInputs}>
          <Input
            type="text"
            titleInput="Nombre"
            text="Ingresa tu nombre"
            config={register("name")}
          />
          <Input
            type="text"
            config={register("last_name")}
            titleInput="Apellidos"
            text="Ingresa tus apellidos"
          />
          <Input
            type="text"
            config={register("username")}
            titleInput="Usuario"
            text="Ingresa tu nombre de usuario"
          />
          <Input
            type="email"
            config={register("email")}
            titleInput="Correo electronico"
            text="ejemplo@gmail.com"
          />
          <Input
            type="password"
            config={register("password")}
            titleInput="Contraseña"
            text="Al menos 8 caracteres"
          />
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
