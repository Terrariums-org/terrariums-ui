import styles from "./TableTerrariums.module.css";
import { TerrariumForList } from "../../../../entities/entity";
import { TableHeader, TerrariumTable } from "../../components";
import { LayoutModal } from "../../../../layouts/LayoutModal/LayoutModal";
import FormTerrarium from "../FormTerrarium/FormTerrarium";
import { EditTerrariumDto } from "../../../../entities/dtos";
import { useContext } from "react";
import { INITIAL_STATE_EDIT_TERRARIUM } from "../../../../constants";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/entities";
import { EditTerrariumContext } from "../../context/EditTerrariumContext";
import { usePostTerrarium } from "../../../../hooks";

interface Props {
  terrariums: TerrariumForList[];
  isLoading: boolean;
}

const TableTerrariums: React.FC<Props> = ({ terrariums, isLoading }) => {
  const { token, id } = useSelector((state: RootState) => state.auth);
  const { editTerrariumState, changeTerrariumState } =
    useContext(EditTerrariumContext);
  const { handlePost } = usePostTerrarium(
    "Algo fallo al editar el terrario!",
    "Terrario editado exitosamente!",
    token
  );

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    changeTerrariumState(INITIAL_STATE_EDIT_TERRARIUM);
  };

  return (
    <div className={styles.sectionTable}>
      {editTerrariumState.isOpen && (
        <LayoutModal handleClose={handleClose}>
          <FormTerrarium
            titleButton="Editar"
            titleForm="Editar Terrario"
            handleAction={async (data) => {
              const reqTerrarium = new EditTerrariumDto(
                data,
                editTerrariumState.idTerrarium,
                id
              );
              await handlePost(reqTerrarium);
            }}
          />
        </LayoutModal>
      )}
      <TableHeader />
      <TerrariumTable terrariums={terrariums} isLoading={isLoading} />
    </div>
  );
};

export default TableTerrariums;
