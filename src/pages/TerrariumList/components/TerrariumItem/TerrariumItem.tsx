import EditSvg from "../../../../assets/svg/edit.svg";
import DeleteSvg from "../../../../assets/svg/delete.svg";
import styles from "./TerrariumItem.module.css";

interface Props {
  terrariumId: number;
  terrariumName: string;
}

export const TerrariumItem: React.FC<Props> = ({
  terrariumId,
  terrariumName,
}) => {
  return (
    <tr>
      <td className={styles.terrariumName}>
        <div className={styles.terrariumNameContainer}>
          <span className={styles.terrariumNumber}>{terrariumId}</span>
          <div></div>
          <span>{terrariumName}</span>
        </div>
      </td>
      <td>
        <button className={`${styles.buttonIcon} ${styles.editIcon}`}>
          <img src={EditSvg} alt="Edit icon" />
        </button>
      </td>
      <td>
        <button className={`${styles.buttonIcon} ${styles.deleteIcon}`}>
          <img src={DeleteSvg} alt="Delete icon" />
        </button>
      </td>
    </tr>
  );
};
