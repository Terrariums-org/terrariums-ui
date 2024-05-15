import { useLocation } from "wouter";
import { ButtonAction } from "../../../../components/ButtonAction/ButtonAction";
import { HorizontalLine } from "../../../../components/HorizontalLine/HorizontalLine";
import { Input } from "../../../../components/Input/Input";
import { Message } from "../../../../components/MessageNewUsers/Message";
import styles from "./Form.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginUserBase } from "../../../../entities/entity";
import { LoginUserSchema } from "../../validator/LoginUser.validator";
import { loginUserAsync } from "../../../../redux/Auth/thunks/loginUser.async";
import { useAppDispatch } from "../../../../redux/entities/reduxDispatch.entity";
import { useErrorName } from "../../../../hooks/useErrorName";
import { getStatusActionRedux } from "../../../../utils/getStatusActionRedux";

export const Form = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_location, setLocation] = useLocation();
  const { register, handleSubmit } = useForm<LoginUserBase>({
    resolver: zodResolver(LoginUserSchema),
  });
  const dispatch = useAppDispatch();
  const { setError, setStatusActionRedux } = useErrorName("", "/dashboard");

  const handleRegister = (e: React.MouseEvent) => {
    e.preventDefault();
    setLocation("/register");
  };

  const handleOnSubmit = async (data: LoginUserBase) => {
    const res = await dispatch(loginUserAsync(data));
    const statusRedux = getStatusActionRedux(res?.type);
    setStatusActionRedux(statusRedux);
    setError(res);
  };

  return (
    <div className={styles.mainContainer}>
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className={styles.containerForm}
      >
        <Message
          titleContent="Iniciar Sesión"
          descriptionContent={"Bajo el sol del nuevo día, reptiles acechan."}
          actionTitle="Inicia sesión para comenzar."
        />
        <Input
          titleInput="Correo electronico"
          text="ejemplo@gmail.com"
          config={register("email")}
          type="email"
        />
        <Input
          type="password"
          titleInput="Contraseña"
          text="Al menos 8 caracteres"
          config={register("password")}
        />
        <button className={styles.buttonPassword}>
          ¿Olvidaste tu contraseña?
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
