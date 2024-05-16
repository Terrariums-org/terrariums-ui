import styles from "./Register.module.css";
import { ArtImg } from "../../../components/ArtImg/ArtImg";
import GeckoImg from "../../../assets/imgs/gecko.png";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";
import { AlertAction } from "../../../components";
import { useContext } from "react";
import { AlertStatusContext } from "../../../context/AlertStatus/AlertStatusContext";

export const Register = () => {
  const {alertStatus} = useContext(AlertStatusContext)
  const { canShowAlert, message, isValid } = alertStatus;

  return (
    <main className={styles.mainContainer}>
      {canShowAlert && <AlertAction message={message} isValid={isValid} />}
      <RegisterForm />
      <ArtImg urlImg={GeckoImg} altImg="Gecko Img" />
    </main>
  );
};
