import { ReactNode } from "react";
import styles from "./LayoutModal.module.css";

interface Props {
  children: ReactNode;
  handleClose: (e: React.MouseEvent) => void;
}

export const LayoutModal: React.FC<Props> = ({ children, handleClose }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
        <div className={styles.containerButton}>
          <button onClick={handleClose}>
            <span>X</span>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
