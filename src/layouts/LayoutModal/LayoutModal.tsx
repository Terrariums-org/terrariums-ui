import { ReactNode } from "react";
import styles from "./LayoutModal.module.css";

interface Props {
  children: ReactNode;
}

export const LayoutModal: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>{children}</div>
    </div>
  );
};
