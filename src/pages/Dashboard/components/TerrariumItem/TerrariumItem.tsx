import EditSvg from "../../../../assets/svg/edit.svg";
import DeleteSvg from "../../../../assets/svg/delete.svg";
import styles from "./TerrariumItem.module.css";
import { deleteTerrariumByIdService } from "../../../../services/services/terrariums/deleteTerrariumById.service";
import { useCallback, useContext } from "react";
import { AlertStatusContext } from "../../../../context/AlertStatus/AlertStatusContext";
import { INITIAL_STATE_FOR_STATUS_TYPE } from "../../../../constants";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/entities";

interface Props {
  idToShoww: number;
  terrariumName: string;
  terrariumId: number;
}

export const TerrariumItem: React.FC<Props> = ({
  idToShoww,
  terrariumName,
  terrariumId,
}) => {
  const { token } = useSelector((state: RootState) => state.auth);

  const { changeStatus } = useContext(AlertStatusContext);

  const handleDelete = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      deleteTerrariumByIdService(terrariumId, token)
        .then(() => {
          changeStatus({
            message: "Terrario eliminado exitosamente!",
            isValid: true,
            canShowAlert: true,
          });
          return;
        })
        .catch((err) => {
          changeStatus({
            message: "Algo fallo al borrar el terrario!",
            isValid: false,
            canShowAlert: true,
          });
          throw new Error(err);
        })
        .finally(() => {
          setTimeout(() => {
            changeStatus(INITIAL_STATE_FOR_STATUS_TYPE);
            window.location.reload();
          }, 3000);
        });
    },
    [terrariumId]
  );

  return (
    <tr>
      <td className={styles.terrariumName}>
        <div className={styles.terrariumNameContainer}>
          <span className={styles.terrariumNumber}>{idToShoww}</span>
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
        <button
          className={`${styles.buttonIcon} ${styles.deleteIcon}`}
          onClick={handleDelete}
        >
          <img src={DeleteSvg} alt="Delete icon" />
        </button>
      </td>
    </tr>
  );
};
