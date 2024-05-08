import styles from "./Register.module.css";
import { ArtImg } from "../../../components/ArtImg/ArtImg";
import GeckoImg from "../../../assets/imgs/gecko.png";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";

export const Register = () => {
  return (
    <main className={styles.mainContainer}>
      <RegisterForm />
      <ArtImg urlImg={GeckoImg} altImg="Gecko Img" />
    </main>
  );
};
