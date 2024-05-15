import styles from './TableTerrariums.module.css'
import { TerrariumForList } from "../../../../entities/entity";
import { TableHeader } from "../../components/TableHeader/TableHeader";
import { TerrariumTable } from "../../components/TerrariumTable/TerrariumTable";

interface Props {
  terrariums : TerrariumForList[];
  isLoading : boolean;
}

const TableTerrariums :React.FC<Props> = ({terrariums, isLoading}) => {
  return (
    <div className={styles.sectionTable}>
      <TableHeader />
      <TerrariumTable terrariums={terrariums} isLoading={isLoading}/>
    </div>
  );
};

export default TableTerrariums;
