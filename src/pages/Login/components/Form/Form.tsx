import { Message } from "../../../../components/MessageNewUsers/Message";
import styles from "./Form.module.css";

export const Form = () => {
  return (
    <div className={styles.mainContainer}>
      <Message />
      <form action="" className={styles.containerForm}></form>
    </div>
  );
};
