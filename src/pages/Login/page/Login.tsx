import GeckoImg from "../../../assets/imgs/gecko.png";
import { ArtImg } from "../../../components/ArtImg/ArtImg";
import { Form } from "../components/Form/Form";
import styles from "./Login.module.css";

export const Login = () => {
  return (
    <main className={styles.mainContainer}>
      <Form />
      <ArtImg urlImg={GeckoImg} altImg="Gecko Img" />
    </main>
  );
};
