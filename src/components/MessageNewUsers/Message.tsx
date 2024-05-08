import { TerrariumHeader } from "../TerrariumHeader/TerrariumHeader";
import styles from "./Message.module.css";

interface Props {
  titleContent: string;
  descriptionContent: string;
  actionTitle: string;
}

export const Message : React.FC<Props> = ({titleContent, descriptionContent, actionTitle}) => {
  return (
    <div className={styles.container}>
      <TerrariumHeader />
      <span className={styles.title}>
        {titleContent}
        <br />
      </span>
      <span>
        {descriptionContent}
        <br />
        {actionTitle}
      </span>
    </div>
  );
};
