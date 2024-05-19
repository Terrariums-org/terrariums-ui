import EditSvg from "../../../../assets/svg/edit.svg";
import DeleteSvg from "../../../../assets/svg/delete.svg";
import styles from "./TerrariumItem.module.css";
import { deleteTerrariumByIdService } from "../../../../services/services/terrariums/deleteTerrariumById.service";
import { useCallback, useContext } from "react";
import { AlertStatusContext } from "../../../../context/AlertStatus/AlertStatusContext";
import { INITIAL_STATE_FOR_STATUS_TYPE } from "../../../../constants";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/entities";
import { EditTerrariumContext } from "../../context/EditTerrariumContext";
import { TerrariumMetricsContext } from "../../../../context/TerrariumMetrics";

interface Props {
  idToShow: number;
  terrariumName: string;
  terrariumId: number;
  codeEsp: string;
}

export const TerrariumItem: React.FC<Props> = ({
  idToShow,
  terrariumName,
  terrariumId,
  codeEsp,
}) => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { changeStatus } = useContext(AlertStatusContext);
  const { changeTerrariumState } = useContext(EditTerrariumContext);
  const { setTerrarium } = useContext(TerrariumMetricsContext);

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

  const handleEdit = (e: React.MouseEvent) => {
    e.preventDefault();
    changeTerrariumState({
      idTerrarium: terrariumId,
      isOpen: true,
    });
  };

  const handleTerrarium = (e: React.MouseEvent) => {
    e.preventDefault();
    setTerrarium({
      id: terrariumId,
      name: terrariumName,
      esp32Code: codeEsp,
    });
  };

  return (
    <tr>
      <td className={styles.terrariumName} onClick={handleTerrarium}>
        <div className={styles.terrariumNameContainer}>
          <span className={styles.terrariumNumber}>{idToShow}</span>
          <div></div>
          <span>{terrariumName}</span>
        </div>
      </td>
      <td>
        <button
          className={`${styles.buttonIcon} ${styles.editIcon}`}
          onClick={handleEdit}
        >
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
