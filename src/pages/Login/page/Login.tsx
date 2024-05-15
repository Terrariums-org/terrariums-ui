import styles from "./Login.module.css";
import GeckoImg from "../../../assets/imgs/gecko.png";
import { AlertAction, ArtImg } from "../../../components";
import { Form } from "../components/Form/Form";
import { useContext } from "react";
import { AlertStatusContext } from "../../../context/AlertStatus/AlertStatusContext";

export const Login = () => {
  const { alertStatus } = useContext(AlertStatusContext);
  const { canShowAlert, message, isValid } = alertStatus;
  return (
    <main className={styles.mainContainer}>
      {canShowAlert && <AlertAction message={message} isValid={isValid} />}
      <Form />
      <ArtImg urlImg={GeckoImg} altImg="Gecko Img" />
    </main>
  );
};
